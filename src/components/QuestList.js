import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import QuestItem from './QuestItem';

const QuestList = ({ quests, onComplete, onDelete, emptyMessage }) => {
  if (quests.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{emptyMessage || 'No quests yet'}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={quests}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <QuestItem
          quest={item}
          onComplete={() => onComplete(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default QuestList;
