import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, Dimensions
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
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
  Concerts: undefined;
  Sports: undefined;
  "Arts & Theater": undefined;
  accscreen: undefined; // Added accscreen
};

const categories = ["Concerts", "Sports", "Arts, Theater & Comedy"];

// Category Navigation Component
const CategoryNav = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View className="flex-row justify-center gap-3 bg-black py-4">
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => setSelected(category)}
          className={`px-4 py-2 rounded-md border ${
            selected === category ? "bg-white border-white" : "border-gray-500"
          }`}
          accessibilityLabel={category}
          accessibilityRole="button"
        >
          <Text
            className={`${
              selected === category ? "text-black font-semibold" : "text-white font-medium"
            }`}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4 px-4 pt-6">
          <Text className="text-2xl font-bold flex-1 text-center">ticketmaster</Text>
          <View className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
            <Image
              source={{ uri: "https://flagcdn.com/w40/us.png" }}
              className="w-full h-full"
              defaultSource={require("../../../assets/images/banner.jpg")}
            />
          </View>
        </View>

        {/* Location and Date Selection */}
        <View className="px-4 mb-3">
          <View className="flex-row justify-between items-center pb-2 border-b border-gray-300">
            <View className="flex-row items-center">
              <Ionicons name="navigate-outline" size={24} color="blue" />
              <Text className="text-black ml-2 text-base">NYC</Text>
            </View>
            <View className="h-5 w-px bg-gray-300 mx-2" />
            <View className="flex-row items-center">
              <Ionicons name="calendar-outline" size={24} color="blue" />
              <Text className="text-black ml-2 text-base">All Dates</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#1E90FF" />
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-4 mb-3">
          <View className="flex-row items-center bg-white rounded-lg shadow-sm border border-gray-300 p-2">
            <TextInput
              className="flex-1 ml-2 text-gray-500"
              placeholder="Search for artists, venues, and events"
              placeholderTextColor="#808080"
            />
            <Feather name="search" size={20} color="#808080" />
          </View>
        </View>

        {/* Category Navigation */}
        <CategoryNav />

        {/* Featured Event */}
        <View className="w-full">
          <ImageBackground
            source={require("../../../assets/images/banner.jpg")}
            resizeMode="cover"
            style={{ width: screenWidth, height: 250 }}
            className="justify-end p-6"
          >
            <Text className="text-white text-2xl font-bold">Kendrick Lamar and SZA</Text>
            <TouchableOpacity className="bg-blue-600 py-3 px-6 rounded-lg mt-4 w-40">
              <Text className="text-white font-semibold text-center">Find Tickets</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white py-4 border-t border-gray-200 flex-row justify-around items-center">
        <TouchableOpacity
          className="items-center"
          onPress={() => handleNavigation("Home")}
          accessibilityLabel="Discover"
          accessibilityRole="button"
        >
          <Ionicons name="search" size={24} color="blue" />
          <Text className="text-xs text-gray-500 mt-1">Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => handleNavigation("Calendar")}
          accessibilityLabel="For You"
          accessibilityRole="button"
        >
          <Ionicons name="heart" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => handleNavigation("Tickets")}
          accessibilityLabel="My Events"
          accessibilityRole="button"
        >
          <Ionicons name="ticket" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => handleNavigation("Tickets")}
          accessibilityLabel="Sell"
          accessibilityRole="button"
        >
          <Ionicons name="cash" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => handleNavigation("accscreen")} // Changed from "Profile" to "accscreen"
          accessibilityLabel="My Account"
          accessibilityRole="button"
        >
          <Ionicons name="person" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
