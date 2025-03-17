import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import EventCard, { Event } from "../../../components/EventCard";
import EventDetailsModal from "../../../components/EventDetailsModal";

// Define the navigation type
type RootStackParamList = {
  Home: undefined;
  Events: undefined;
  accscreen: undefined;
};

// Sample event data
const events: Event[] = [
  {
    id: 1,
    title: "Taylor Swift | The Eras Tour",
    date: "Fri, Oct 18, 7:00pm",
    venue: "Hard Rock Stadium",
    image: require("../../../assets/images/sza.png"),
    tickets: 2,
    price: "$350",
    section: "Floor B, Row 10",
    description: "Experience Taylor Swift's record-breaking Eras Tour, a journey through all of Taylor's musical eras.",
  },
  {
    id: 2,
    title: "Kendrick Lamar & SZA",
    date: "Sat, Nov 5, 8:00pm",
    venue: "Crypto.com Arena",
    image: require("../../../assets/images/sza.png"),
    tickets: 4,
    price: "$220",
    section: "Section 112, Row 15",
    description: "Don't miss this incredible collaboration between Kendrick Lamar and SZA live in concert.",
  },
  {
    id: 3,
    title: "Blake Shelton",
    date: "Sun, Dec 10, 6:30pm",
    venue: "The Forum",
    image: require("../../../assets/images/blake.jpeg"),
    tickets: 3,
    price: "$180",
    section: "Loge 5, Row 2",
    description: "Country music superstar Blake Shelton brings his Back to the Honky Tonk Tour to town.",
  },
  {
    id: 4,
    title: "Doja Cat World Tour",
    date: "Wed, Sep 20, 7:30pm",
    venue: "Madison Square Garden",
    image: require("../../../assets/images/doja.jpg"),
    tickets: 2,
    price: "$195",
    section: "Section 209, Row 8",
    description: "Doja Cat brings her electrifying performance and chart-topping hits to the stage.",
  },
];

const EventsScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeEventDetails = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Events</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Event Cards */}
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            onPress={openEventDetails} 
          />
        ))}
      </ScrollView>

      {/* Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        visible={modalVisible}
        onClose={closeEventDetails}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="magnify" size={22} color="gray" />
          <Text style={styles.navItemText}>Discover</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="heart-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="ticket" size={22} color="#3B82F6" />
          <Text style={styles.navItemTextActive}>My Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="tag-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>Sell</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('accscreen')}
        >
          <MaterialCommunityIcons name="account-circle-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>My Account</Text>
        </TouchableOpacity>
      </View>
      
      {/* Home Indicator Line */}
      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  helpButton: {
    padding: 5,
  },
  helpText: {
    fontSize: 16,
    color: "#666",
  },
  scrollView: {
    flex: 1,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navItemText: {
    fontSize: 12,
    color: "#666",
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
    backgroundColor: "#ddd",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 6,
  },
});

export default EventsScreen; 