import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  image: ImageSourcePropType;
  tickets: number;
  price: string;
  section: string;
  description: string;
  row?: string;
  seat?: string;
  sec?: string;
}

interface EventCardProps {
  event: Event;
  onPress: (event: Event) => void;
}

// Custom Taylor Swift Eras tour image
const jhopeImage = require("../assets/images/jhope.jpg");

const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  // Check if this is the Taylor Swift event
  const isTaylorSwift = event.title.includes("Jhope");
  
  return (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => onPress(event)}
    >
      <Image source={jhopeImage} style={styles.eventImage} />
      <View style={styles.eventContent}>
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDate}>{event.date} • {event.venue}</Text>
          <View style={styles.ticketInfo}>
            <MaterialCommunityIcons name="ticket" size={16} color="#fff" />
            <Text style={styles.ticketCount}>{event.tickets} Tickets</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    marginHorizontal: 0,
    marginVertical: 0,
    height: 240,
    backgroundColor: "#000",
    overflow: "hidden",
    position: "relative",
  },
  eventImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.8,
  },
  eventContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  eventInfo: {
    width: "100%",
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  ticketInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticketCount: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 4,
  },
});

export default EventCard; 