import React from "react";
import {
  View, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, Dimensions, StyleSheet, StatusBar, SafeAreaView
} from "react-native";
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollContainer}>
        {/* Header with Logo and Flag */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ticketmaster</Text>
          <View style={styles.headerRight}>
           
            <View style={styles.flagContainer}>
              <Image
                source={{ uri: "https://flagcdn.com/w40/us.png" }}
                style={{ width: 32, height: 32 }}
              />
            </View>
          </View>
        </View>

        {/* Location and Date Selection */}
        <View style={styles.locationDateContainer}>
          <View style={styles.locationWrapper}>
            <Ionicons name="location-outline" size={20} color="#3B82F6" />
            <Text style={styles.locationText}>Los Angeles, CA</Text>
            <TouchableOpacity>
              <Ionicons name="close-circle" size={16} color="gray" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.dateWrapper}>
            <Ionicons name="calendar-outline" size={20} color="#3B82F6" />
            <Text style={styles.dateText}>All Dates</Text>
          </View>
          
          <Ionicons name="chevron-forward" size={20} color="white" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by Artist, Event or Venue"
              placeholderTextColor="#6B7280"
            />
            <Ionicons name="search" size={24} color="#3B82F6" />
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

        
        {/* Add some bottom padding for scrolling beyond the bottom nav */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="search" size={24} color="#3B82F6" />
            <Text style={styles.navItemTextActive}>Discover</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="heart-outline" size={24} color="#9CA3AF" />
            <Text style={styles.navItemText}>For You</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => handleNavigation("Events")}
          >
            <Ionicons name="ticket-outline" size={24} color="#9CA3AF" />
            <Text style={styles.navItemText}>My Events</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="cash-outline" size={24} color="#9CA3AF" />
            <Text style={styles.navItemText}>Sell</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => handleNavigation("accscreen")}
          >
            <Ionicons name="person-circle-outline" size={24} color="#9CA3AF" />
            <Text style={styles.navItemText}>My Account</Text>
          </TouchableOpacity>
        </View>
        
        {/* Home Indicator Line */}
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 124,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  newBadge: {
    backgroundColor: "#8B5CF6",
    borderRadius: 20,
    marginRight: 8,
    paddingHorizontal: 14,
    paddingVertical: 6,
    overflow: "hidden",
  },
  newBadgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  flagContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden",
  },
  locationDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#000",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 6,
    marginRight: 4,
  },
  divider: {
    height: 20,
    width: 1,
    backgroundColor: "#333",
    marginHorizontal: 12,
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 6,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#4B5563",
  },
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    backgroundColor: "#222",
  },
  lastCategoryButton: {
    marginRight: 0,
  },
  categoryText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  featuredEventContainer: {
    width: "100%",
  },
  featuredEventImage: {
    width: screenWidth,
    height: 380,
  },
  featuredEventTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
  },
  featuredEventTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  findTicketsButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: 180,
    marginBottom: 16,
  },
  findTicketsText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  secondEventContainer: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  secondEventImage: {
    width: screenWidth,
    height: 220,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNavigation: {
    height: 70,
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 0,
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
    fontWeight: "500",
    marginTop: 4,
  },
  homeIndicator: {
    height: 5,
    width: 120,
    backgroundColor: "#555",
    borderRadius: 2.5,
    alignSelf: "center",
    marginVertical: 8,
  },
});

export default HomeScreen;