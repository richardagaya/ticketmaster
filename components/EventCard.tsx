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
}

interface EventCardProps {
  event: Event;
  onPress: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => onPress(event)}
    >
      <Image source={event.image} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventDate}>{event.date} • {event.venue}</Text>
        <View style={styles.ticketInfo}>
          <MaterialCommunityIcons name="ticket-outline" size={16} color="#666" />
          <Text style={styles.ticketCount}>{event.tickets} tickets</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  eventImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  ticketInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticketCount: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
});

export default EventCard; 