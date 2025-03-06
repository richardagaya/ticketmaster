import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
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

  // Sample data for the gallery
  const galleryData = [
    { id: 1, title: "Concerts", location: "Los Angeles, CA", imageUrl: "https://example.com/concert.jpg" },
    { id: 2, title: "Sports", location: "New York, NY", imageUrl: "https://example.com/sports.jpg" },
    { id: 3, title: "Arts, Theater & Com", location: "Chicago, IL", imageUrl: "https://example.com/arts.jpg" },
  ];

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
          placeholder="Search by Artist, Event or Venue"
          placeholderTextColor="gray"
          className="flex-1 px-3 text-gray-700"
          accessibilityLabel="Search by Artist, Event or Venue"
        />
      </View>

      {/* Featured Event */}
      <View className="mb-6">
        <Text className="text-xl font-bold mb-2">Kendrick Lamar and SZA</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-full">
          <Text className="text-white font-semibold text-center">Find Tickets</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap justify-between">
          {galleryData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="w-[48%] bg-gray-100 rounded-lg mb-4"
              onPress={() => handleNavigation("Events")} // Adjust navigation as needed
            >
              <Image
                source={{ uri: item.imageUrl }}
                className="w-full h-40 rounded-t-lg"
                resizeMode="cover"
              />
              <View className="p-2">
                <Text className="text-lg font-semibold">{item.title}</Text>
                <Text className="text-gray-500">{item.location}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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