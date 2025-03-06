import React from "react";
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
=======
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
>>>>>>> 12c661693bb5d1e515b64a73e5612ea70e07c681
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
<<<<<<< HEAD
        <Text className="text-2xl font-bold">Discover</Text>
=======
        <Text className="text-2xl font-bold flex items-center justify-center">ticketmaster</Text>
>>>>>>> 12c661693bb5d1e515b64a73e5612ea70e07c681
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
<<<<<<< HEAD
        <Ionicons name="search" size={20} color="gray" />
=======
>>>>>>> 12c661693bb5d1e515b64a73e5612ea70e07c681
        <TextInput
          placeholder="Search by Artist, Event or Venue"
          placeholderTextColor="gray"
          className="flex-1 px-3 text-gray-700"
<<<<<<< HEAD
          accessibilityLabel="Search events, artists, venues"
=======
          accessibilityLabel="Search by Artist, Event or Venue"
>>>>>>> 12c661693bb5d1e515b64a73e5612ea70e07c681
        />
        <Ionicons name="search" size={20} color="gray" />
      </View>

<<<<<<< HEAD
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
=======
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
>>>>>>> 12c661693bb5d1e515b64a73e5612ea70e07c681

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