/**
 * Quest Types - Different categories of goals/tasks
 * - DAILY: Regular daily goals
 * - SIDE_QUEST: Quick tasks (laundry, punctuality, etc.)
 * - BOSS: Day-long tasks (groceries, meal prep, lawn, etc.)
 * - MEGA_BOSS: Multi-week or month-long projects
 */
export const QuestType = {
  DAILY: 'DAILY',
  SIDE_QUEST: 'SIDE_QUEST',
  BOSS: 'BOSS',
  MEGA_BOSS: 'MEGA_BOSS',
};

/**
 * XP values for each quest type
 */
export const XP_VALUES = {
  [QuestType.DAILY]: 10,
  [QuestType.SIDE_QUEST]: 25,
  [QuestType.BOSS]: 100,
  [QuestType.MEGA_BOSS]: 500,
  CREATE_TOMORROW_LIST: 50, // Bonus XP for creating tomorrow's list
};

/**
 * Quest/Goal structure
 * @typedef {Object} Quest
 * @property {string} id - Unique identifier
 * @property {string} title - Quest title
 * @property {string} description - Quest description
 * @property {string} type - Quest type (DAILY, SIDE_QUEST, BOSS, MEGA_BOSS)
 * @property {number} xp - XP value for completing the quest
 * @property {boolean} completed - Completion status
 * @property {string} date - Date string (YYYY-MM-DD) for daily goals
 * @property {string} createdAt - ISO timestamp
 * @property {string} completedAt - ISO timestamp (if completed)
 */

/**
 * User Profile structure
 * @typedef {Object} UserProfile
 * @property {number} totalXP - Total XP earned
 * @property {number} level - Current level
 * @property {boolean} hasCreatedTomorrowList - Whether tomorrow's list has been created today
 */
