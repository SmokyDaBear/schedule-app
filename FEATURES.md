# Features Documentation

## Quest Types & XP Values

### Daily Goals (10 XP) 🔵
Regular daily tasks that help you stay on track.
- Color: Blue (#4A90E2)
- Examples: Drink 8 glasses of water, Read for 30 minutes, Exercise

### Side Quests (25 XP) 🟢
Quick tasks that can be completed in a short time.
- Color: Green (#7ED321)
- Examples: 
  - Do a load of laundry
  - Get to work on time
  - Clean your desk
  - Water the plants

### Bosses (100 XP) 🟡
Day-long tasks that require significant time and effort.
- Color: Orange (#F5A623)
- Examples:
  - Go grocery shopping
  - Meal prep for the week
  - Mow the lawn
  - Deep clean the house
  - Complete a work project

### Mega Bosses (500 XP) 🔴
Multi-week or month-long projects that require sustained effort.
- Color: Red (#D0021B)
- Examples:
  - Complete a certification course
  - Renovate a room
  - Write a book chapter
  - Plan a major event
  - Develop a new skill

## Special Features

### Create Tomorrow's List (+50 XP)
Earn bonus XP for planning ahead! You can claim this reward once per day by creating at least one quest for tomorrow.

### Leveling System
Your level increases as you accumulate XP:
- **Level Calculation**: `Level = floor(sqrt(totalXP / 100)) + 1`
- **XP for Next Level**: `XP needed = Level² × 100`

Example progression:
- Level 1: 0 XP
- Level 2: 100 XP
- Level 3: 400 XP
- Level 4: 900 XP
- Level 5: 1,600 XP
- Level 10: 10,000 XP

### Visual Progress Tracking
- See your current level and total XP at the top of the screen
- Watch the progress bar fill as you get closer to leveling up
- Get instant feedback when completing quests

## User Interface

### Main Screen Components

1. **User Profile Card**
   - Current level display
   - Total XP count
   - Progress bar to next level
   - Next level XP requirement

2. **Tab Navigation**
   - Switch between "Today" and "Tomorrow" views
   - See different quests for each day
   - Visual indicator for active tab

3. **Quest List**
   - Color-coded quest cards
   - Quest type badge
   - XP value displayed
   - Complete/Delete buttons
   - Completed quests show checkmark and strikethrough text

4. **Action Buttons**
   - "+ Add Quest" - Create a new quest
   - "📝 Create Tomorrow's List" - Earn bonus XP (once per day)

### Add Quest Modal

When adding a quest, you can:
- Enter a quest title (required)
- Add an optional description
- Select the quest type (with helpful descriptions)
- The quest is automatically saved to the selected date

## Data Persistence

All your data is automatically saved locally using AsyncStorage:
- Your quests are saved and restored between app sessions
- Your XP and level progress is maintained
- Quest completion status is preserved
- Tomorrow's list bonus tracking persists

## Workflow Example

### Morning Routine
1. Open the app and see your current level
2. Review today's quests
3. Add any new daily goals or side quests

### Throughout the Day
1. Complete quests as you finish tasks
2. Watch your XP grow with each completion
3. Get motivated by seeing your progress

### Evening Planning
1. Tap "Create Tomorrow's List" to earn bonus XP
2. Add quests for tomorrow:
   - Side Quests: Quick tasks
   - Bosses: Major tasks
   - Mega Bosses: Continue working on long-term projects
3. Review tomorrow's plan
4. Sleep well knowing you're organized!

### End of Day
1. See your total XP earned for the day
2. Check if you leveled up
3. Feel accomplished about your completed quests

## Tips for Success

1. **Start Small**: Begin with daily goals and side quests to build momentum
2. **Plan Ahead**: Use the tomorrow feature to stay organized
3. **Mix Quest Types**: Balance quick wins (side quests) with bigger achievements (bosses)
4. **Track Long-term Goals**: Use mega bosses to make progress on important multi-week projects
5. **Be Consistent**: Creating tomorrow's list every day builds a planning habit and earns extra XP
6. **Review Progress**: Check your level and total XP to see how far you've come

## Future Enhancement Ideas

Potential features that could be added:
- Weekly/monthly XP statistics
- Recurring daily quests
- Quest categories beyond the main four types
- Achievements and badges
- Streak tracking
- Quest history and analytics
- Custom XP values per quest
- Quest priorities
- Reminders and notifications
- Social features (compete with friends)
