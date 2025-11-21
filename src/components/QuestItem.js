import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { QuestType, XP_VALUES } from '../types';

const QuestItem = ({ quest, onComplete, onDelete }) => {
  const getQuestColor = (type) => {
    switch (type) {
      case QuestType.DAILY:
        return '#4A90E2';
      case QuestType.SIDE_QUEST:
        return '#7ED321';
      case QuestType.BOSS:
        return '#F5A623';
      case QuestType.MEGA_BOSS:
        return '#D0021B';
      default:
        return '#4A90E2';
    }
  };

  const getQuestLabel = (type) => {
    switch (type) {
      case QuestType.DAILY:
        return 'Daily';
      case QuestType.SIDE_QUEST:
        return 'Side Quest';
      case QuestType.BOSS:
        return 'Boss';
      case QuestType.MEGA_BOSS:
        return 'Mega Boss';
      default:
        return 'Quest';
    }
  };

  const color = getQuestColor(quest.type);
  const label = getQuestLabel(quest.type);
  const xp = XP_VALUES[quest.type] || 0;

  return (
    <View style={[styles.container, quest.completed && styles.completedContainer]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={[styles.badge, { backgroundColor: color }]}>
            <Text style={styles.badgeText}>{label}</Text>
          </View>
          <Text style={styles.xpText}>+{xp} XP</Text>
        </View>
        
        <Text style={[styles.title, quest.completed && styles.completedText]}>
          {quest.title}
        </Text>
        
        {quest.description ? (
          <Text style={[styles.description, quest.completed && styles.completedText]}>
            {quest.description}
          </Text>
        ) : null}
      </View>

      <View style={styles.actions}>
        {!quest.completed ? (
          <TouchableOpacity 
            style={[styles.button, styles.completeButton]} 
            onPress={onComplete}
          >
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.completedBadge}>
            <Text style={styles.completedBadgeText}>✓ Completed</Text>
          </View>
        )}
        
        <TouchableOpacity 
          style={[styles.button, styles.deleteButton]} 
          onPress={onDelete}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedContainer: {
    opacity: 0.6,
    backgroundColor: '#f9f9f9',
  },
  content: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  xpText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  completeButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D0021B',
    marginRight: 0,
  },
  deleteButtonText: {
    color: '#D0021B',
    fontSize: 14,
    fontWeight: '600',
  },
  completedBadge: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#7ED321',
  },
  completedBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default QuestItem;
