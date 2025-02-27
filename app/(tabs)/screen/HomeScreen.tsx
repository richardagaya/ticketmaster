import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Discover</Text>
      </View>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F3F4F6",
          borderRadius: 24,
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginBottom: 24,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search events, artists, venues"
          placeholderTextColor="gray"
          style={{ flex: 1, paddingHorizontal: 12, color: "#4B5563" }}
          accessibilityLabel="Search events, artists, venues"
        />
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        <TouchableOpacity
          style={{ backgroundColor: "#3B82F6", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24 }}
          onPress={() => handleNavigation("Events")}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#E5E7EB", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24 }}
          onPress={() => handleNavigation("Venues")}
        >
          <Text style={{ color: "#374151", fontWeight: "600" }}>Venues</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#E5E7EB", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 24 }}
          onPress={() => handleNavigation("Artists")}
        >
          <Text style={{ color: "#374151", fontWeight: "600" }}>Artists</Text>
        </TouchableOpacity>
      </View>

      {/* Content Placeholder */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#6B7280" }}>Upcoming events will be displayed here</Text>
      </View>

      {/* Bottom Navigation */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          paddingVertical: 16,
          borderTopWidth: 1,
          borderColor: "#E5E7EB",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
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