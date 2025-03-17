import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import AccScreen from "./screen/AccountScreen"; // Make sure this file exists
import EventsScreen from "./screen/EventsScreen"; // Import EventsScreen

// Define type for navigation stack
export type RootStackParamList = {
  Home: undefined;
  accscreen: undefined; // Make sure this matches your HomeScreen navigation
  Events: undefined; // Add Events to the navigation stack
};

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="accscreen" component={AccScreen} />
          <Stack.Screen name="Events" component={EventsScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
