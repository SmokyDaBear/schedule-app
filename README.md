# Schedule App - Quest Tracker with XP System

A mobile app for scheduling your day and earning XP for completing goals! Built with React Native and Expo.

## Features

### Quest System
Track your daily goals and earn XP by completing them! There are four types of quests:

- **Daily Goals** (10 XP) - Regular daily tasks
- **Side Quests** (25 XP) - Quick tasks like doing laundry or getting to work on time
- **Bosses** (100 XP) - Day-long tasks like grocery shopping, meal prep, or mowing the lawn
- **Mega Bosses** (500 XP) - Multi-week or month-long projects

### XP and Leveling
- Complete quests to earn XP
- Level up as you accumulate XP
- Track your progress with a visual progress bar
- Special bonus: Create tomorrow's list for +50 XP (once per day)

### Daily Planning
- Create and manage quests for today and tomorrow
- Mark quests as completed to earn XP
- Delete quests you no longer need
- Automatic data persistence using AsyncStorage

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SmokyDaBear/schedule-app.git
cd schedule-app
```

2. Install dependencies:
```bash
npm install
```

### Running the App

#### On Web
```bash
npm run web
```

#### On iOS (requires macOS)
```bash
npm run ios
```

#### On Android
```bash
npm run android
```

Or use the Expo Go app on your mobile device:
```bash
npm start
```
Then scan the QR code with the Expo Go app.

## Project Structure

```
schedule-app/
├── App.js                      # Main app component
├── src/
│   ├── components/            # UI components
│   │   ├── AddQuestForm.js   # Form to add new quests
│   │   ├── QuestItem.js      # Individual quest display
│   │   ├── QuestList.js      # List of quests
│   │   └── UserProfile.js    # User XP and level display
│   ├── contexts/             # React contexts for state management
│   │   ├── QuestContext.js   # Quest management
│   │   └── UserContext.js    # User profile management
│   ├── types/                # Type definitions
│   │   └── index.js          # Quest types and XP values
│   └── utils/                # Utility functions
│       ├── dateUtils.js      # Date handling
│       └── xpUtils.js        # XP calculations
├── assets/                    # App assets
└── package.json              # Dependencies
```

## How to Use

1. **View Your Progress**: The top of the screen shows your current level, total XP, and progress to the next level.

2. **Add Quests**: 
   - Tap "+ Add Quest" to create a new quest
   - Enter a title and optional description
   - Select the quest type (Daily, Side Quest, Boss, or Mega Boss)
   - The quest will be added to today's list

3. **Complete Quests**: 
   - Tap "Complete" on any quest to mark it as done and earn XP
   - You'll see a notification showing how much XP you earned

4. **Create Tomorrow's List**: 
   - Tap "📝 Create Tomorrow's List" to earn bonus XP
   - This can only be done once per day
   - Add quests for tomorrow by selecting the "Tomorrow" tab

5. **Switch Between Days**: 
   - Use the "Today" and "Tomorrow" tabs to view and manage quests for each day

## XP System

### Quest XP Values
- Daily Goal: 10 XP
- Side Quest: 25 XP
- Boss: 100 XP
- Mega Boss: 500 XP
- Create Tomorrow's List: 50 XP (once per day)

### Leveling Formula
Your level is calculated based on total XP:
```
Level = floor(sqrt(totalXP / 100)) + 1
```

XP needed for next level:
```
XP for level N = N² × 100
```

## Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **React Context API** - State management
- **AsyncStorage** - Local data persistence

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
