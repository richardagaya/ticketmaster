import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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

// Sample event data - Upcoming events
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "SABRINA CARPENTER: SHORT N' SWEET TOUR",
    date: "Fri, Oct 31, 7:00pm",
    venue: "Maddison Square Garden",
    image: require("../../../assets/images/sabrina.jpg"),
    tickets: 2,
    price: "$350",
    section: "Sec202, Row 4",
    description: "Experience Sabrina Carpenter's Short N' Sweet Tour, featuring her latest hits and fan favorites.",
    sec: "209",
    row: "23",
    seat: "6"
  },
];

// Sample event data - Past events
const pastEvents: Event[] = [
  {
    id: 2,
    title: "SHORT N' SWEET|SABRINA CARPENTER",
    date: "Sat, Apr 26, 7:00pm",
    venue: "Maddison Square Garden",
    image: require("../../../assets/images/sabrina.jpg"),
    tickets: 4,
    price: "$220",
    section: "Sec202, Row 4",
    description: "Don't miss Sabrina Carpenter performing live in concert with special guests.",
  },
];

const EventsScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeEventDetails = () => {
    setModalVisible(false);
  };

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Events</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]} 
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
            UPCOMING ({upcomingEvents.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'past' && styles.activeTab]} 
          onPress={() => setActiveTab('past')}
        >
          <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
            PAST ({pastEvents.length})
          </Text>
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
          <Ionicons name="search" size={24} color="#9CA3AF" />
          <Text style={styles.navItemText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navItemText}>For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ticket" size={24} color="#3B82F6" />
          <Text style={styles.navItemTextActive}>My Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cash-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navItemText}>Sell</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('accscreen')}
        >
          <Ionicons name="person-circle-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navItemText}>My Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#222",
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  helpButton: {
    padding: 5,
  },
  helpText: {
    fontSize: 16,
    color: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#0066cc",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(255,255,255,0.7)",
  },
  activeTabText: {
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
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
    color: "#0066cc",
    marginTop: 4,
  },
});

export default EventsScreen; 