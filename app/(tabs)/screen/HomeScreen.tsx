import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Events: undefined;
  Venues: undefined;
  Artists: undefined;
  Calendar: undefined;
  Tickets: undefined;
  Profile: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-1 bg-white px-4 py-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Discover</Text>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search events, artists, venues"
          placeholderTextColor="gray"
          className="flex-1 px-3 text-gray-700"
          accessibilityLabel="Search events, artists, venues"
        />
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          className="bg-blue-500 px-4 py-2 rounded-full"
          onPress={() => handleNavigation("Events")}
        >
          <Text className="text-white font-semibold">Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 px-4 py-2 rounded-full"
          onPress={() => handleNavigation("Venues")}
        >
          <Text className="text-gray-700 font-semibold">Venues</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 px-4 py-2 rounded-full"
          onPress={() => handleNavigation("Artists")}
        >
          <Text className="text-gray-700 font-semibold">Artists</Text>
        </TouchableOpacity>
      </View>

      {/* Content Placeholder */}
      <View className="flex-1">
        <Text className="text-xl font-bold mb-4">Kendrick Lamar and SZA</Text>
        <View className="flex-row mb-4">
          <View className="w-1/2 pr-2">
            <View className="bg-gray-200 rounded-lg h-40 mb-2"></View>
            <Text className="text-lg font-semibold">Concert</Text>
            <Text className="text-gray-500">Los Angeles, CA</Text>
          </View>
          <View className="w-1/2 pl-2">
            <View className="bg-gray-200 rounded-lg h-40 mb-2"></View>
            <Text className="text-lg font-semibold">Sports</Text>
            <Text className="text-gray-500">Los Angeles, CA</Text>
          </View>
        </View>
        <View className="flex-row">
          <View className="w-1/2 pr-2">
            <View className="bg-gray-200 rounded-lg h-40 mb-2"></View>
            <Text className="text-lg font-semibold">Arts, Theater & Comedy</Text>
            <Text className="text-gray-500">Los Angeles, CA</Text>
          </View>
          <View className="w-1/2 pl-2">
            <View className="bg-gray-200 rounded-lg h-40 mb-2"></View>
            <Text className="text-lg font-semibold">Concert</Text>
            <Text className="text-gray-500">Los Angeles, CA</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-4 border-t border-gray-200 flex-row justify-around">
        <TouchableOpacity onPress={() => handleNavigation("Home")}>
          <Ionicons name="home" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Calendar")}>
          <Ionicons name="calendar" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Tickets")}>
          <Ionicons name="ticket" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Profile")}>
          <Ionicons name="person" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;