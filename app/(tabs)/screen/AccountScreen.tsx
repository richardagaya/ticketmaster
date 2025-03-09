import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const AccountScreen = () => {
  const [locationBasedContent, setLocationBasedContent] = useState(true);
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Header */}
      <View className="p-5 bg-gray-900">
        <Text className="text-xl font-bold text-white">My Account</Text>
      </View>

      {/* User Info */}
      <View className="p-5 flex-row items-center bg-gray-800">
        <View>
          <Text className="text-lg font-bold text-white">Mike</Text>
          <Text className="text-gray-400">showalter58@gmail.com</Text>
        </View>
      </View>

      {/* Notifications */}
      <View className="p-5">
        <Text className="text-lg text-white mb-3">Notifications</Text>
        <View className="flex-row justify-between items-center py-2">
          <Text className="text-white">Receive Notifications?</Text>
          <Switch
            value={receiveNotifications}
            onValueChange={setReceiveNotifications}
            className="your-tailwind-classes"
          />
        </View>
      </View>

      {/* Location Settings */}
      <View className="p-5">
        <Text className="text-lg text-white mb-3">Location Settings</Text>
        <TouchableOpacity className="flex-row justify-between py-2">
          <Text className="text-white">My Location</Text>
          <Text className="text-blue-400">Chicago</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between py-2">
          <Text className="text-white">My Country</Text>
          <Text className="text-blue-400">United States</Text>
        </TouchableOpacity>
        <View className="flex-row justify-between items-center py-2">
          <Text className="text-white">Location Based Content</Text>
          <Switch
            value={locationBasedContent}
            onValueChange={setLocationBasedContent}
            className="your-tailwind-classes"
          />
        </View>
      </View>

      {/* Preferences */}
      <View className="p-5">
        <Text className="text-lg text-white mb-3">Preferences</Text>
        <TouchableOpacity className="flex-row items-center py-2">
          <FontAwesome5 name="heart" size={18} color="#fff" />
          <Text className="text-white ml-3">My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-2">
          <MaterialIcons name="payment" size={18} color="#fff" />
          <Text className="text-white ml-3">Saved Payment Methods</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out */}
      <View className="p-5">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleSignOut}
          accessibilityLabel="Sign Out"
          accessibilityRole="button"
        >
          <Ionicons name="log-out-outline" size={20} color="red" />
          <Text className="text-red-500 ml-3">Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;