import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView, Image, SafeAreaView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the navigation type
type RootStackParamList = {
  Home: undefined;
  Events: undefined;
  accscreen: undefined;
};

const AccountScreen = () => {
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  const [locationBasedContent, setLocationBasedContent] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        {/* Header with Black Background */}
        <View className="bg-black w-full">
          <Text className="text-2xl font-medium text-white text-center py-6">My Account</Text>
        </View>

        {/* User Information Section */}
        <View className="p-6 bg-black">
          <Text className="text-4xl text-white font-medium mb-2">Mike</Text>
          <Text className="text-xl text-gray-400">showalter58@gmail.com</Text>
        </View>

        {/* Notifications Section */}
        <View className="px-5 pt-8 pb-2">
          <Text className="text-2xl font-medium text-black mb-4">Notifications</Text>

          {/* My Notifications */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="email-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">My Notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          {/* Receive Notifications */}
          <View className="flex-row justify-between items-center py-3 border-b border-gray-300">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="bell-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Receive Notifications?</Text>
            </View>
            <Switch
              value={receiveNotifications}
              onValueChange={setReceiveNotifications}
              trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
              thumbColor={receiveNotifications ? "#4299e1" : "#fff"}
              ios_backgroundColor="#f4f3f4"
            />
          </View>
        </View>

        {/* Location Settings */}
        <View className="px-5 pt-6 pb-2">
          <View className="flex-row items-center mb-4">
            <Text className="text-2xl font-medium text-black">Location Settings</Text>
            <View className="ml-2 bg-blue-600 rounded-full px-3 py-1">
              <Text className="text-white font-bold text-xs">NEW!</Text>
            </View>
          </View>

          {/* My Location */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="map-marker-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">My Location</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-lg text-blue-600 mr-2">Los Angeles, CA</Text>
              <MaterialCommunityIcons name="pencil-outline" size={22} color="blue" className="ml-1" />
            </View>
          </TouchableOpacity>

          {/* My Country */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <View className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                <Image 
                  source={{ uri: "https://flagcdn.com/w40/us.png" }} 
                  style={{ width: "100%", height: "100%" }} 
                  resizeMode="cover"
                />
              </View>
              <Text className="text-lg text-black ml-4">My Country</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-lg text-blue-600 mr-2">United States</Text>
              <MaterialCommunityIcons name="pencil-outline" size={22} color="blue" className="ml-1" />
            </View>
          </TouchableOpacity>

          {/* Location Based Content */}
          <View className="flex-row justify-between items-center py-3 border-b border-gray-300">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="navigation-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Location Based Content</Text>
            </View>
            <Switch
              value={locationBasedContent}
              onValueChange={setLocationBasedContent}
              trackColor={{ false: "#f4f3f4", true: "#f4f3f4" }}
              thumbColor={locationBasedContent ? "#4299e1" : "#fff"}
              ios_backgroundColor="#f4f3f4"
            />
          </View>
        </View>

        {/* Preferences */}
        <View className="px-5 pt-6 pb-2">
          <Text className="text-2xl font-medium text-black mb-4">Preferences</Text>

          {/* My Favorites */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="heart-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">My Favorites</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          {/* Saved Payment Methods */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="credit-card-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Saved Payment Methods</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          {/* Change App Icon */}
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-300">
            <View className="flex-row items-center">
              <Text className="text-3xl text-black ml-1 mr-2">T</Text>
              <Text className="text-lg text-black ml-2">Change App Icon</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Help & Guidance */}
        <View className="px-5 pt-6 pb-2">
          <Text className="text-2xl font-medium text-black mb-4">Help & Guidance</Text>

          {/* Need Help? */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="help-circle-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Need Help?</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          {/* Give Us Feedback */}
          <TouchableOpacity className="flex-row justify-between items-center py-3">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="pencil-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Give Us Feedback</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>

          {/* Legal */}
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-300">
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="file-document-outline" size={28} color="black" />
              <Text className="text-lg text-black ml-4">Legal</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity className="mx-5 my-6">
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="logout" size={28} color="red" />
            <Text className="text-lg text-red-600 ml-4">Sign Out</Text>
          </View>
        </TouchableOpacity>
        
        {/* Bottom padding to ensure content doesn't get hidden behind tab bar */}
        <View className="h-20" />
      </ScrollView>

      {/* Tab Bar - Fixed at bottom */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-around items-center py-3 bg-white border-t border-gray-200">
        <TouchableOpacity 
          className="items-center"
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="magnify" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">Discover</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <MaterialCommunityIcons name="heart" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="items-center"
          onPress={() => navigation.navigate('Events')}
        >
          <MaterialCommunityIcons name="ticket-outline" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">My Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <MaterialCommunityIcons name="tag-outline" size={24} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">Sell</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <MaterialCommunityIcons name="account-circle" size={24} color="blue" />
          <Text className="text-xs text-blue-600 mt-1">My Account</Text>
        </TouchableOpacity>
      </View>
      
      {/* Home Indicator Line */}
      <View className="h-1 w-32 bg-black mx-auto mb-1 rounded-full" />
    </SafeAreaView>
  );
};

export default AccountScreen;