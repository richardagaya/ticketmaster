import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const AccountScreen = () => {
  const [locationBasedContent, setLocationBasedContent] = useState(true);
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5 bg-gray-900">
        <Text className="flex justify-center items-center text-xl font-bold text-white">My Account</Text>
      </View>

      {/* User Info */}
      <View className="p-5 flex-row items-center bg-gray-800">
        <View>
          <Text className="text-lg font-bold text-white">Mike</Text>
          <Text className="text-gray-400">richardagaya100@gmail.com</Text>
        </View>
      </View>

      {/* Notifications */}
      <View className="p-5">
        <Text className="text-lg text-gray-700 mb-3">Notifications</Text>

        {/* My Notifications */}
        <TouchableOpacity className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <Ionicons name="mail-outline" size={18} color="#4a90e2" />
            <Text className="text-gray-700 ml-3">My Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#4a90e2" />
        </TouchableOpacity>

        {/* Receive Notifications */}
        <View className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <Ionicons name="notifications-outline" size={18} color="#4a90e2" />
            <Text className="text-gray-700 ml-3">Receive Notifications?</Text>
          </View>
          <Switch
            value={receiveNotifications}
            onValueChange={setReceiveNotifications}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={receiveNotifications ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Location Settings */}
      <View className="p-5">
        <Text className="text-lg text-gray-700 mb-3">Location Settings</Text>
        <TouchableOpacity className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={18} color="#4a90e2" />
            <Text className="text-gray-700 ml-3">My Location</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-blue-400 mr-2">Chicago</Text>
            <Ionicons name="chevron-forward" size={18} color="#4a90e2" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <View className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
              <Image 
                source={{ uri: "https://flagcdn.com/w40/us.png" }} 
                style={{ width: "100%", height: "100%" }} 
                resizeMode="cover"
              />
            </View>
            <Text className="text-gray-700 ml-3">My Country</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-blue-400 mr-2">United States</Text>
            <Ionicons name="chevron-forward" size={18} color="#4a90e2" />
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <Ionicons name="navigate-outline" size={18} color="#4a90e2" />
            <Text className="text-gray-700 ml-3">Location Based Content</Text>
          </View>
          <Switch
            value={locationBasedContent}
            onValueChange={setLocationBasedContent}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={locationBasedContent ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Preferences */}
      <View className="p-5">
        <Text className="text-lg text-gray-700 mb-3">Preferences</Text>
        <TouchableOpacity className="flex-row items-center py-2">
          <FontAwesome5 name="heart" size={18} color="#4a90e2" />
          <Text className="text-gray-700 ml-3">My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-2">
          <MaterialIcons name="payment" size={18} color="#4a90e2" />
          <Text className="text-gray-700 ml-3">Saved Payment Methods</Text>
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
