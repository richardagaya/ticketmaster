import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import React from 'react';
import 'react-native-reanimated';
import App from './(tabs)/App';
import { useColorScheme } from '@/hooks/useColorScheme';
import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <App />
  );
}
