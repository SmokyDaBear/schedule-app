import { XP_VALUES } from '../types';

/**
 * Calculate level from total XP
 * Formula: level = floor(sqrt(totalXP / 100)) + 1
 */
export const calculateLevel = (totalXP) => {
  return Math.floor(Math.sqrt(totalXP / 100)) + 1;
};

/**
 * Calculate XP needed for next level
 */
export const calculateXPForNextLevel = (currentLevel) => {
  return currentLevel * currentLevel * 100;
};

/**
 * Calculate XP progress to next level (0-1)
 */
export const calculateXPProgress = (totalXP) => {
  const currentLevel = calculateLevel(totalXP);
  const xpForCurrentLevel = (currentLevel - 1) * (currentLevel - 1) * 100;
  const xpForNextLevel = calculateXPForNextLevel(currentLevel);
  const xpInCurrentLevel = totalXP - xpForCurrentLevel;
  const xpNeededForLevel = xpForNextLevel - xpForCurrentLevel;
  return xpInCurrentLevel / xpNeededForLevel;
};

/**
 * Get XP value for a quest type
 */
export const getXPForQuestType = (questType) => {
  return XP_VALUES[questType] || 0;
};
