import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { calculateXPForNextLevel, calculateXPProgress } from '../utils/xpUtils';

const UserProfile = () => {
  const { user } = useUser();
  const xpForNextLevel = calculateXPForNextLevel(user.level);
  const progress = calculateXPProgress(user.totalXP);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.levelText}>Level {user.level}</Text>
        <Text style={styles.xpText}>{user.totalXP} XP</Text>
      </View>
      
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      
      <Text style={styles.nextLevelText}>
        Next level at {xpForNextLevel} XP
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  xpText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
  },
  nextLevelText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default UserProfile;
