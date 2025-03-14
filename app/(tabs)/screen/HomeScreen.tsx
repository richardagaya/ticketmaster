import React from "react";
import {
  View, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, Dimensions, StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  accscreen: undefined;
};

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header with Logo and Flag */}
        <View className="flex-row items-center justify-between px-4 pt-6 pb-4">
          <Text className="text-black text-3xl font-bold">ticketmaster</Text>
          <View className="flex-row items-center">
            <View className="bg-white rounded-lg mr-2 overflow-hidden">
            </View>
            <View className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
              <Image
                source={{ uri: "https://flagcdn.com/w40/us.png" }}
                className="w-full h-full"
              />
            </View>
          </View>
        </View>

        {/* Location and Date Selection */}
        <View style={styles.locationDateContainer}>
          <View style={styles.locationWrapper}>
            <MaterialCommunityIcons name="navigation-variant-outline" size={20} color="#3B82F6" />
            <Text style={styles.locationText}>Los Angeles, CA</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="close-circle" size={16} color="gray" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.dateWrapper}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={20} color="#3B82F6" />
            <Text style={styles.dateText}>All Dates</Text>
          </View>
          
          <MaterialCommunityIcons name="chevron-right" size={20} color="black" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by Artist, Event or Venue"
              placeholderTextColor="#6B7280"
            />
            <MaterialCommunityIcons name="magnify" size={22} color="#3B82F6" />
          </View>
        </View>

        {/* Category Navigation */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Concerts</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Sports</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.categoryButton, styles.lastCategoryButton]}>
            <Text style={styles.categoryText}>Arts, Theater & Com</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Event - Kendrick Lamar and SZA */}
        <View style={styles.featuredEventContainer}>
          <ImageBackground
            source={require("../../../assets/images/sza.png")}
            defaultSource={require("../../../assets/images/sza.png")}
            resizeMode="cover"
            style={styles.featuredEventImage}
          >
            <View style={styles.featuredEventTextContainer}>
              <Text style={styles.featuredEventTitle}>Kendrick Lamar and SZA</Text>
              <TouchableOpacity style={styles.findTicketsButton}>
                <Text style={styles.findTicketsText}>Find Tickets</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        
        {/* Second Featured Event - Person with Hat */}
        <View style={styles.secondEventContainer}>
          <Image
            source={require("../../../assets/images/blake.jpeg")}
            defaultSource={require("../../../assets/images/blake.jpeg")}
            resizeMode="cover"
            style={styles.secondEventImage}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="magnify" size={22} color="#3B82F6" />
          <Text style={styles.navItemTextActive}>Discover</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="heart-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="ticket-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>My Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="tag-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>Sell</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => handleNavigation("accscreen")}
        >
          <MaterialCommunityIcons name="account-circle-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>My Account</Text>
        </TouchableOpacity>
      </View>
      
      {/* Home Indicator Line */}
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  newBadge: {
    backgroundColor: "#8B5CF6",
    borderRadius: 8,
    marginRight: 8,
    overflow: "hidden",
  },
  newBadgeText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 12,
  },
  flagContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  flagEmoji: {
    fontSize: 14,
  },
  locationDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 6,
    marginRight: 4,
  },
  divider: {
    height: 16,
    width: 1,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 12,
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 6,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#4B5563",
  },
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  lastCategoryButton: {
    marginRight: 0,
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
  },
  featuredEventContainer: {
    width: "100%",
  },
  featuredEventImage: {
    width: screenWidth,
    height: 340,
  },
  featuredEventTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  featuredEventTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  findTicketsButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: 160,
    marginBottom: 16,
  },
  findTicketsText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  secondEventContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  secondEventImage: {
    width: screenWidth - 32,
    height: 200,
    borderRadius: 8,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
  },
  navItemText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  navItemTextActive: {
    fontSize: 12,
    color: "#3B82F6",
    marginTop: 4,
  },
  homeIndicator: {
    height: 4,
    width: 100,
    backgroundColor: "#9CA3AF",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 6,
  },
});

export default HomeScreen;