/**
 * Get today's date string in YYYY-MM-DD format
 */
export const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

/**
 * Get tomorrow's date string in YYYY-MM-DD format
 */
export const getTomorrowString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

/**
 * Format date for display
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

/**
 * Check if a date string is today
 */
export const isToday = (dateString) => {
  return dateString === getTodayString();
};

/**
 * Check if a date string is tomorrow
 */
export const isTomorrow = (dateString) => {
  return dateString === getTomorrowString();
};
