import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Event } from "./EventCard";
import TransferTicketsModal from "./TransferTicketsModal";

const { width, height } = Dimensions.get("window");

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
  const [transferModalVisible, setTransferModalVisible] = useState(false);

  if (!event) return null;

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
      >
        <SafeAreaView style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <MaterialCommunityIcons name="close" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Tickets</Text>
            <View style={{ width: 28 }} />
          </View>

          <View style={styles.contentContainer}>
            {/* Ticket Card */}
            <View style={styles.ticketCard}>
              {/* Ticket Type */}
              <View style={styles.ticketTypeContainer}>
                <Text style={styles.ticketTypeText}>Standard Admission</Text>
              </View>

              {/* Seat Info */}
              <View style={styles.seatInfoContainer}>
                <View style={styles.seatColumn}>
                  <Text style={styles.seatLabel}>SEC</Text>
                  <Text style={styles.seatValue}>202</Text>
                </View>
                <View style={styles.seatColumn}>
                  <Text style={styles.seatLabel}>ROW</Text>
                  <Text style={styles.seatValue}>4</Text>
                </View>
                <View style={styles.seatColumn}>
                  <Text style={styles.seatLabel}>SEAT</Text>
                  <Text style={styles.seatValue}>6</Text>
                </View>
              </View>

              {/* Event Image */}
              <Image 
                source={require('../assets/images/sabrina.jpg')}
                style={styles.eventImage}
                resizeMode="cover"
              />

              {/* Event Info */}
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>SABRINA CARPENTER: SHORT N' SWEET TOUR</Text>
                <Text style={styles.eventDateTime}>
                  Fri • Oct 31 • 7:00pm • Madison Square Garden
                </Text>
              </View>

              {/* Location */}
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>UPPER BOWL</Text>
              </View>

              {/* View Ticket Button */}
              <TouchableOpacity style={styles.viewTicketButton}>
                <MaterialCommunityIcons name="qrcode" size={20} color="#FFFFFF" />
                <Text style={styles.viewTicketText}>View Ticket</Text>
              </TouchableOpacity>

              {/* Ticket Details */}
              <TouchableOpacity style={styles.ticketDetailsButton}>
                <Text style={styles.ticketDetailsText}>Ticket Details</Text>
              </TouchableOpacity>
            </View>

            {/* Ticketmaster Logo */}
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>ticketmaster®</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity 
                style={styles.transferButton}
                onPress={() => setTransferModalVisible(true)}
              >
                <Text style={styles.transferButtonText}>Transfer</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.sellButton}
                disabled={true}
              >
                <Text style={styles.sellButtonText}>Sell</Text>
              </TouchableOpacity>
            </View>

            {/* Navigation Dots */}
            <View style={styles.dotsContainer}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Transfer Modal */}
      <TransferTicketsModal
        event={event}
        visible={transferModalVisible}
        onClose={() => setTransferModalVisible(false)}
        selectedSeats={["7"]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#1A1E25",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#1A1E25",
    height: height * 0.08,
  },
  closeButton: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ticketCard: {
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    width: width - 32,
    maxHeight: height * 0.68,
  },
  ticketTypeContainer: {
    backgroundColor: "#0078FF",
    paddingVertical: 10,
    alignItems: "center",
  },
  ticketTypeText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  seatInfoContainer: {
    flexDirection: "row",
    backgroundColor: "#0078FF",
    paddingBottom: 10,
  },
  seatColumn: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  seatLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  seatValue: {
    fontSize: 30,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  eventImage: {
    width: "100%",
    height: height * 0.2,
  },
  eventInfo: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    marginBottom: 6,
  },
  eventDateTime: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
  },
  locationContainer: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  locationText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333333",
  },
  viewTicketButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0078FF",
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
  },
  viewTicketText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  ticketDetailsButton: {
    alignItems: "center",
    paddingVertical: 8,
    marginBottom: 8,
  },
  ticketDetailsText: {
    color: "#0078FF",
    fontSize: 16,
    fontWeight: "500",
  },
  logoContainer: {
    backgroundColor: "#0078FF",
    paddingVertical: 12,
    alignItems: "center",
    width: width - 32,
    marginTop: 0, // No margin top to align with card
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 32,
    marginTop: 12,
    gap: 12,
  },
  transferButton: {
    flex: 1,
    backgroundColor: '#0078FF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  transferButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sellButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  sellButtonText: {
    color: '#999999',
    fontSize: 16,
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#777777",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
  },
});

export default EventDetailsModal;