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

// Sample event data - Upcoming events
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "j-hope Tour | 'HOPE ON THE STAGE' in CHICAGO",
    date: "Mon, MAR 17, 8:00pm",
    venue: "Allstate Arena",
    image: require("../../../assets/images/jhope.jpg"),
    tickets: 2,
    price: "$350",
    section: "Floor B, Row 10",
    description: "Experience Taylor Swift's record-breaking Eras Tour, a journey through all of Taylor's musical eras.",
    sec: "144",
    row: "27",
    seat: "7"
  },
];

// Sample event data - Past events
const pastEvents: Event[] = [
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
        useJhopeImage={true}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="magnify" size={22} color="gray" />
          <Text style={styles.navItemText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="heart-outline" size={22} color="gray" />
          <Text style={styles.navItemText}>For You</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="ticket" size={22} color="#0066cc" />
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