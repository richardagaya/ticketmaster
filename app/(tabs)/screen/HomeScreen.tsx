import React from "react";
import {
  View, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, Dimensions, StyleSheet, StatusBar, SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>ticketmaster</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.flagContainer}>
              <Image
                source={{ uri: "https://flagcdn.com/w40/us.png" }}
                style={styles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Location and Date */}
        <View style={styles.locationDateContainer}>
          <View style={styles.locationWrapper}>
            <MaterialCommunityIcons name="map-marker-outline" size={24} color="#fff" />
            <Text style={styles.locationText}>Los Angeles</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="close" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.dateWrapper}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={24} color="#fff" />
            <Text style={styles.dateText}>All Dates</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by Artist, Event or Venue"
              placeholderTextColor="#666"
            />
            <MaterialCommunityIcons name="magnify" size={24} color="#0066cc" />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Concerts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Arts, Theater & Com</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Events */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Events</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Event Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.featuredEventsContainer}
          contentContainerStyle={styles.featuredEventsContent}
        >
          <TouchableOpacity style={styles.featuredEventCard}>
            <Image source={require("../../../assets/images/sabrina.jpg")} style={styles.featuredEventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Sabrina Carpenter</Text>
              <Text style={styles.eventDate}>Sat, Apr 26 • 7:00 PM</Text>
              <Text style={styles.eventVenue}>Allstate Arena</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featuredEventCard}>
            <Image source={require("../../../assets/images/blake.jpeg")} style={styles.featuredEventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Blake Shelton</Text>
              <Text style={styles.eventDate}>Fri, May 10 • 8:00 PM</Text>
              <Text style={styles.eventVenue}>SoFi Stadium</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Trending Near You */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Near You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Trending Event Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.trendingEventsContainer}
          contentContainerStyle={styles.trendingEventsContent}
        >
          <TouchableOpacity style={styles.trendingEventCard}>
            <Image source={require("../../../assets/images/doja.jpg")} style={styles.trendingEventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Doja Cat</Text>
              <Text style={styles.eventDate}>Thu, Jun 15 • 7:30 PM</Text>
              <Text style={styles.eventVenue}>The Forum</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendingEventCard}>
            <Image source={require("../../../assets/images/rodwave.jpg")} style={styles.trendingEventImage} />
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Rod Wave</Text>
              <Text style={styles.eventDate}>Sat, Jul 8 • 8:00 PM</Text>
              <Text style={styles.eventVenue}>Crypto.com Arena</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Bottom Spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="magnify" size={26} color="#3B82F6" />
            <Text style={styles.navItemTextActive}>Discover</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="heart-outline" size={26} color="#9CA3AF" />
            <Text style={styles.navItemText}>For You</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => handleNavigation("Events")}
          >
            <MaterialCommunityIcons name="ticket-outline" size={26} color="#9CA3AF" />
            <Text style={styles.navItemText}>My Events</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="tag-outline" size={26} color="#9CA3AF" />
            <Text style={styles.navItemText}>Sell</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => handleNavigation("accscreen")}
          >
            <MaterialCommunityIcons name="account-outline" size={26} color="#9CA3AF" />
            <Text style={styles.navItemText}>Account</Text>
          </TouchableOpacity>
        </View>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 24,
  },
  logoText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "500",
    fontStyle: "italic",
    marginLeft: 100,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  newBadge: {
    backgroundColor: "#8B5CF6",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  newBadgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  flagContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",
  },
  flagImage: {
    width: "100%",
    height: "100%",
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
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#333",
    marginHorizontal: 16,
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  categoryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllButton: {
    color: "#3B82F6",
    fontSize: 14,
  },
  featuredEventsContainer: {
    marginBottom: 24,
  },
  featuredEventsContent: {
    paddingHorizontal: 16,
  },
  featuredEventCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
  },
  featuredEventImage: {
    width: "100%",
    height: 160,
  },
  eventInfo: {
    padding: 12,
  },
  eventTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventDate: {
    color: "#999",
    fontSize: 14,
    marginBottom: 2,
  },
  eventVenue: {
    color: "#999",
    fontSize: 14,
  },
  trendingEventsContainer: {
    marginBottom: 24,
  },
  trendingEventsContent: {
    paddingHorizontal: 16,
  },
  trendingEventCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
  },
  trendingEventImage: {
    width: "100%",
    height: 160,
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1a1a1a",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navItemText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
  navItemTextActive: {
    fontSize: 12,
    color: "#3B82F6",
    fontWeight: "500",
    marginTop: 4,
  },
});

export default HomeScreen;