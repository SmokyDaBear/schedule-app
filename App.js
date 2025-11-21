import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { QuestProvider, useQuests } from './src/contexts/QuestContext';
import { UserProvider, useUser } from './src/contexts/UserContext';
import UserProfile from './src/components/UserProfile';
import QuestList from './src/components/QuestList';
import AddQuestForm from './src/components/AddQuestForm';
import { getTodayString, getTomorrowString, formatDate } from './src/utils/dateUtils';
import { getXPForQuestType } from './src/utils/xpUtils';
import { XP_VALUES } from './src/types';

const AppContent = () => {
  const [showAddQuest, setShowAddQuest] = useState(false);
  const [selectedDate, setSelectedDate] = useState(getTodayString());
  const [addQuestDate, setAddQuestDate] = useState(getTodayString());
  
  const { getTodayQuests, getTomorrowQuests, getQuestsByDate, addQuest, completeQuest, deleteQuest } = useQuests();
  const { addXP, canCreateTomorrowList, markTomorrowListCreated } = useUser();

  const todayQuests = getTodayQuests();
  const tomorrowQuests = getTomorrowQuests();
  const displayQuests = getQuestsByDate(selectedDate);

  const handleCompleteQuest = (questId) => {
    const quest = displayQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
      const xp = getXPForQuestType(quest.type);
      completeQuest(questId);
      addXP(xp);
      Alert.alert('Quest Completed!', `You earned ${xp} XP!`);
    }
  };

  const handleDeleteQuest = (questId) => {
    Alert.alert(
      'Delete Quest',
      'Are you sure you want to delete this quest?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => deleteQuest(questId) },
      ]
    );
  };

  const handleAddQuest = (title, description, type, date) => {
    addQuest(title, description, type, date);
  };

  const handleCreateTomorrowList = () => {
    if (canCreateTomorrowList()) {
      setAddQuestDate(getTomorrowString());
      setShowAddQuest(true);
      markTomorrowListCreated();
      addXP(XP_VALUES.CREATE_TOMORROW_LIST);
      Alert.alert('Bonus XP!', `You earned ${XP_VALUES.CREATE_TOMORROW_LIST} XP for starting tomorrow's list!`);
    } else {
      Alert.alert('Already Created', "You've already earned XP for creating tomorrow's list today!");
    }
  };

  const openAddQuestForToday = () => {
    setAddQuestDate(getTodayString());
    setShowAddQuest(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView style={styles.content}>
        <Text style={styles.header}>Quest Tracker</Text>
        
        <UserProfile />

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedDate === getTodayString() && styles.activeTab]}
            onPress={() => setSelectedDate(getTodayString())}
          >
            <Text style={[styles.tabText, selectedDate === getTodayString() && styles.activeTabText]}>
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedDate === getTomorrowString() && styles.activeTab]}
            onPress={() => setSelectedDate(getTomorrowString())}
          >
            <Text style={[styles.tabText, selectedDate === getTomorrowString() && styles.activeTabText]}>
              Tomorrow
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.questsContainer}>
          <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
          <QuestList
            quests={displayQuests}
            onComplete={handleCompleteQuest}
            onDelete={handleDeleteQuest}
            emptyMessage={`No quests for ${selectedDate === getTodayString() ? 'today' : 'tomorrow'}. Add one to get started!`}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={openAddQuestForToday}
        >
          <Text style={styles.addButtonText}>+ Add Quest</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tomorrowButton, !canCreateTomorrowList() && styles.disabledButton]}
          onPress={handleCreateTomorrowList}
          disabled={!canCreateTomorrowList()}
        >
          <Text style={styles.tomorrowButtonText}>
            📝 Create Tomorrow's List (+{XP_VALUES.CREATE_TOMORROW_LIST} XP)
          </Text>
        </TouchableOpacity>
      </View>

      <AddQuestForm
        visible={showAddQuest}
        onClose={() => setShowAddQuest(false)}
        onAdd={handleAddQuest}
        defaultDate={addQuestDate}
      />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <UserProvider>
      <QuestProvider>
        <AppContent />
      </QuestProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#4A90E2',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  questsContainer: {
    flex: 1,
    minHeight: 300,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tomorrowButton: {
    backgroundColor: '#7ED321',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  tomorrowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
