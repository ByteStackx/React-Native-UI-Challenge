# React Native UI Challenge - Crypto Exchange App

A modern, responsive cryptocurrency exchange application built with React Native and Expo. This project demonstrates a polished UI for swapping cryptocurrencies, featuring real-time exchange rates, transaction details, and a clean, intuitive user experience.

## Features

- **Currency Exchange Interface** - Swap between different cryptocurrencies (e.g., ETH to USD)
- **Real-time Exchange Rates** - Display current conversion rates
- **Transaction Details** - View estimated fees, total amount to receive, spreads, and gas fees
- **Responsive Design** - Works seamlessly across iOS, Android, and Web platforms
- **Interactive Components** - Touchable buttons, swap functionality, and navigation elements
- **TypeScript Support** - Fully typed codebase for better development experience

## Project Structure

```
app/
  ├── _layout.tsx      # Layout configuration for Expo Router
  └── index.tsx        # Main home screen
components/
  ├── Header.tsx       # Top navigation with title, back button, and notifications
  ├── ExchangeCard.tsx # Currency pair exchange interface
  ├── CurrencySection.tsx
  ├── ExchangeRate.tsx # Rate display component
  ├── BuyButton.tsx    # Call-to-action button
  ├── Footer.tsx       # Transaction details summary
  ├── FooterRow.tsx    # Individual transaction detail row
  └── index.ts         # Component exports
assets/
  └── images/          # App images and icons
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
cd React-Native-UI-Challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the app:
```bash
npm start
```

### Available Commands

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint for code quality checks

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - React Native framework and platform
- **Expo Router** - File-based routing
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Bottom tab navigation
- **React Native Reanimated** - Smooth animations
- **Expo Vector Icons** - Icon library

## Key Dependencies

- `react-native` - Core mobile framework
- `expo` - Development platform
- `expo-router` - File-based routing system
- `@react-navigation/bottom-tabs` - Tab navigation
- `react-native-reanimated` - Animation library
- `expo-haptics` - Haptic feedback

## App Features

### Header Component
- Back navigation button
- Screen title
- Notification bell with badge indicator

### Exchange Card Component
- Display from/to currency pairs
- Show currency icons, labels, and amounts
- Display account balances
- Swap currencies functionality

### Transaction Summary
- Estimated fees
- Total amount to receive
- Exchange spread percentage
- Gas fees for blockchain transactions

## Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Documentation](https://reactnative.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## Useful Links

App download link(apk): [Google Drive Folder](https://drive.google.com/drive/folders/1AFwuSr9TWEiMKrCORq06ETUjg9V6PHSE?usp=sharing)