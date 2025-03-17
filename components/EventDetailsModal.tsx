import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Event } from "./EventCard";

interface EventDetailsModalProps {
  event: Event | null;
  visible: boolean;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  visible,
  onClose,
}) => {
  if (!event) return null;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <ScrollView>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Event Details</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Event Image */}
          <Image source={event.image} style={styles.modalImage} />

          {/* Event Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.modalEventTitle}>{event.title}</Text>
            <Text style={styles.modalEventDate}>{event.date}</Text>
            <Text style={styles.modalEventVenue}>{event.venue}</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.ticketDetailsContainer}>
              <Text style={styles.ticketDetailsTitle}>Ticket Details</Text>
              
              <View style={styles.ticketDetail}>
                <Text style={styles.ticketDetailLabel}>Section</Text>
                <Text style={styles.ticketDetailValue}>{event.section}</Text>
              </View>
              
              <View style={styles.ticketDetail}>
                <Text style={styles.ticketDetailLabel}>Price</Text>
                <Text style={styles.ticketDetailValue}>{event.price} each</Text>
              </View>
              
              <View style={styles.ticketDetail}>
                <Text style={styles.ticketDetailLabel}>Quantity</Text>
                <Text style={styles.ticketDetailValue}>{event.tickets} tickets</Text>
              </View>
            </View>
            
            <View style={styles.divider} />
            
            <Text style={styles.descriptionTitle}>About This Event</Text>
            <Text style={styles.description}>{event.description}</Text>
            
            <TouchableOpacity style={styles.viewTicketsButton}>
              <Text style={styles.viewTicketsText}>View Tickets</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.transferButton}>
              <Text style={styles.transferText}>Transfer Tickets</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.sellButton}>
              <Text style={styles.sellText}>Sell Tickets</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  modalEventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalEventDate: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  modalEventVenue: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
  },
  ticketDetailsContainer: {
    marginBottom: 16,
  },
  ticketDetailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  ticketDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  ticketDetailLabel: {
    fontSize: 16,
    color: "#666",
  },
  ticketDetailValue: {
    fontSize: 16,
    fontWeight: "500",
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 24,
  },
  viewTicketsButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  viewTicketsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  transferButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  transferText: {
    color: "#3B82F6",
    fontSize: 16,
    fontWeight: "bold",
  },
  sellButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 24,
  },
  sellText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventDetailsModal; 