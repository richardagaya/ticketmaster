import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { MagnifyingGlassIcon, CalendarIcon, MapPinIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-black px-4">
      
      {/* Header */}
      <View className="flex-row justify-between items-center pt-6 pb-4">
        <Text className="text-white text-2xl font-bold">ticketmaster</Text>
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3">
            <Text className="text-xs text-purple-400 bg-white px-2 py-1 rounded-lg">NEW!</Text>
          </TouchableOpacity>
          <Image source={{ uri: "https://flagcdn.com/us.svg" }} className="w-6 h-6 rounded-full" />
        </View>
      </View>

      {/* Location & Date Filters */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="flex-row items-center space-x-1">
          <MapPinIcon size={20} color="white" />
          <Text className="text-white text-lg">Los Angeles, ...</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center space-x-1">
          <CalendarIcon size={20} color="white" />
          <Text className="text-white text-lg">All Dates</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="flex-row bg-white p-3 rounded-lg items-center">
        <TextInput
          placeholder="Search by Artist, Event or Venue"
          placeholderTextColor="#999"
          className="flex-1 text-lg text-black"
        />
        <MagnifyingGlassIcon size={24} color="black" />
      </View>

      {/* Category Buttons */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="bg-transparent border border-white px-4 py-2 rounded-lg">
          <Text className="text-white text-lg">Concerts</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-transparent border border-white px-4 py-2 rounded-lg">
          <Text className="text-white text-lg">Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-transparent border border-white px-4 py-2 rounded-lg">
          <Text className="text-white text-lg">Arts, Theater & Comedy</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Event */}
      <View className="mt-6">
        <Image
          source={{ uri: "https://source.unsplash.com/featured/?concert" }}
          className="w-full h-52 rounded-lg"
        />
        <View className="absolute bottom-4 left-4">
          <Text className="text-white text-2xl font-bold">Kendrick Lamar and SZA</Text>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 mt-2 rounded-lg">
            <Text className="text-white text-lg">Find Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white flex-row justify-around py-3 border-t border-gray-300">
        <TouchableOpacity className="items-center">
          <MagnifyingGlassIcon size={24} color="black" />
          <Text className="text-black text-sm">Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-black text-lg">❤️</Text>
          <Text className="text-black text-sm">For You</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-black text-lg">📅</Text>
          <Text className="text-black text-sm">My Events</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-black text-lg">💰</Text>
          <Text className="text-black text-sm">Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-black text-lg">👤</Text>
          <Text className="text-black text-sm">My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
