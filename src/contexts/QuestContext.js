import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTodayString, getTomorrowString } from '../utils/dateUtils';

const QuestContext = createContext();

const QUESTS_STORAGE_KEY = '@schedule_app_quests';

export const QuestProvider = ({ children }) => {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load quests from storage
  useEffect(() => {
    loadQuests();
  }, []);

  // Save quests to storage whenever they change
  useEffect(() => {
    if (!loading) {
      saveQuests();
    }
  }, [quests, loading]);

  const loadQuests = async () => {
    try {
      const stored = await AsyncStorage.getItem(QUESTS_STORAGE_KEY);
      if (stored) {
        setQuests(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading quests:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveQuests = async () => {
    try {
      await AsyncStorage.setItem(QUESTS_STORAGE_KEY, JSON.stringify(quests));
    } catch (error) {
      console.error('Error saving quests:', error);
    }
  };

  const addQuest = (title, description, type, date = getTodayString()) => {
    const newQuest = {
      id: Date.now().toString(),
      title,
      description,
      type,
      completed: false,
      date,
      createdAt: new Date().toISOString(),
    };
    setQuests([...quests, newQuest]);
    return newQuest;
  };

  const completeQuest = (questId) => {
    setQuests(quests.map(quest => 
      quest.id === questId 
        ? { ...quest, completed: true, completedAt: new Date().toISOString() }
        : quest
    ));
  };

  const deleteQuest = (questId) => {
    setQuests(quests.filter(quest => quest.id !== questId));
  };

  const getQuestsByDate = (date) => {
    return quests.filter(quest => quest.date === date);
  };

  const getTodayQuests = () => {
    return getQuestsByDate(getTodayString());
  };

  const getTomorrowQuests = () => {
    return getQuestsByDate(getTomorrowString());
  };

  const value = {
    quests,
    loading,
    addQuest,
    completeQuest,
    deleteQuest,
    getQuestsByDate,
    getTodayQuests,
    getTomorrowQuests,
  };

  return <QuestContext.Provider value={value}>{children}</QuestContext.Provider>;
};

export const useQuests = () => {
  const context = useContext(QuestContext);
  if (!context) {
    throw new Error('useQuests must be used within a QuestProvider');
  }
  return context;
};
