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

// Import J-Hope image
const jhopeImage = require("../assets/images/sza.png");

const { width } = Dimensions.get("window");

interface EventDetailsModalProps {
  event: Event | null;
  visible: boolean;
  onClose: () => void;
  useJhopeImage?: boolean;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  visible,
  onClose,
  useJhopeImage = false,
}) => {
  const [transferModalVisible, setTransferModalVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  if (!event) return null;

  const handleTransferClick = () => {
    // For this example, we'll select both seats 12 and 13
    setSelectedSeats(["12", "13"]);
    setTransferModalVisible(true);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
      >
        <SafeAreaView style={styles.modalContainer}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>My Tickets</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Ticket Container */}
          <View style={styles.ticketContainer}>
            {/* Ticket Info Section */}
            <View style={styles.ticketInfoSection}>
              <Text style={styles.verifiedFanText}>Verified Fan Offer</Text>
              
              <View style={styles.seatInfoContainer}>
                <View style={styles.seatInfo}>
                  <Text style={styles.seatLabel}>SEC</Text>
                  <Text style={styles.seatValue}>{event.sec || "204"}</Text>
                </View>
                <View style={styles.seatInfo}>
                  <Text style={styles.seatLabel}>ROW</Text>
                  <Text style={styles.seatValue}>{event.row || "K"}</Text>
                </View>
                <View style={styles.seatInfo}>
                  <Text style={styles.seatLabel}>SEAT</Text>
                  <Text style={styles.seatValue}>{event.seat || "7"}</Text>
                </View>
              </View>
            </View>

            {/* Event Image and Details */}
            <View style={styles.eventImageContainer}>
              <View style={styles.taylorImageGrid}>
                <Image source={useJhopeImage ? jhopeImage : event.image} style={styles.eventImage} />
              </View>
              <View style={styles.eventInfoOverlay}>
                <Text style={styles.eventTitle}>Grand National Tour|Kendrick Lamar and SZA</Text>
                <Text style={styles.eventDateTime}>Sat • May 24 • 7:00 PM • SoFi Stadium</Text>
              </View>
            </View>

            <View style={styles.venueSection}>
              <Text style={styles.venueText}>GATE H</Text>
            </View>

            {/* View Barcode and Ticket Details */}
            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <Text style={styles.linkText}>View Barcode</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>Ticket Details</Text>
              </TouchableOpacity>
            </View>

            {/* Ticketmaster Logo */}
            <View style={styles.logoContainer}>
              <Text style={styles.ticketMasterLogo}>ticketmaster®</Text>
            </View>
          </View>

          {/* Bottom Buttons */}
          <View style={styles.bottomButtons}>
            <TouchableOpacity 
              style={styles.transferButton}
              onPress={handleTransferClick}
            >
              <Text style={styles.transferButtonText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.sellButtonDisabled}
              disabled={true}
            >
              <Text style={styles.sellButtonTextDisabled}>Sell</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Transfer Modal */}
      <TransferTicketsModal
        event={event}
        visible={transferModalVisible}
        onClose={() => setTransferModalVisible(false)}
        selectedSeats={selectedSeats}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#222",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#222",
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  ticketContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 80,
  },
  ticketInfoSection: {
    backgroundColor: "#0066cc",
    padding: 16,
  },
  verifiedFanText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  seatInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  seatInfo: {
    alignItems: "center",
  },
  seatLabel: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
    marginBottom: 4,
  },
  seatValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  eventImageContainer: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  taylorImageGrid: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  eventImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  eventInfoOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  eventDateTime: {
    fontSize: 14,
    color: "#fff",
  },
  venueSection: {
    padding: 16,
    alignItems: "center",
  },
  venueText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  linkText: {
    color: "#0066cc",
    fontSize: 16,
    fontWeight: "500",
  },
  logoContainer: {
    backgroundColor: "#0066cc",
    padding: 16,
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  ticketMasterLogo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  transferButton: {
    flex: 1,
    backgroundColor: "#0066cc",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 8,
  },
  transferButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sellButtonDisabled: {
    flex: 1,
    backgroundColor: "#444444",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginLeft: 8,
    opacity: 0.5,
  },
  sellButtonTextDisabled: {
    color: "#999999",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventDetailsModal; 