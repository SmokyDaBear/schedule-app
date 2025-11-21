import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { calculateLevel } from '../utils/xpUtils';
import { getTodayString } from '../utils/dateUtils';

const UserContext = createContext();

const USER_STORAGE_KEY = '@schedule_app_user';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    totalXP: 0,
    level: 1,
    lastTomorrowListDate: null, // Track when tomorrow's list was last created
  });
  const [loading, setLoading] = useState(true);

  // Load user from storage
  useEffect(() => {
    loadUser();
  }, []);

  // Save user to storage whenever they change
  useEffect(() => {
    if (!loading) {
      saveUser();
    }
  }, [user, loading]);

  const loadUser = async () => {
    try {
      const stored = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveUser = async () => {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const addXP = (xpAmount) => {
    const newTotalXP = user.totalXP + xpAmount;
    const newLevel = calculateLevel(newTotalXP);
    setUser({
      ...user,
      totalXP: newTotalXP,
      level: newLevel,
    });
  };

  const canCreateTomorrowList = () => {
    // Can create tomorrow's list once per day
    return user.lastTomorrowListDate !== getTodayString();
  };

  const markTomorrowListCreated = () => {
    setUser({
      ...user,
      lastTomorrowListDate: getTodayString(),
    });
  };

  const value = {
    user,
    loading,
    addXP,
    canCreateTomorrowList,
    markTomorrowListCreated,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
