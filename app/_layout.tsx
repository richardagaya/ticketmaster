import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import App from './(tabs)/App';
import { useColorScheme } from '@/hooks/useColorScheme';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      (async () => {
        try {
          // Hide splash screen once fonts are loaded
          await SplashScreen.hideAsync();
        } catch (e) {
          console.warn('Error hiding splash screen:', e);
        }
      })();
    }
  }, [loaded]);

  if (!loaded) {
    // Show a fallback UI while fonts are loading
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    ); // You can replace this with a spinner or loading component
  }

  return (
    <App />
  );
}
