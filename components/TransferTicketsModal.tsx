import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Event } from "./EventCard";
import TransferRecipientForm from "./TransferRecipientForm";

interface TransferTicketsModalProps {
  event: Event | null;
  visible: boolean;
  onClose: () => void;
  selectedSeats?: string[];
}

const TransferTicketsModal: React.FC<TransferTicketsModalProps> = ({
  event,
  visible,
  onClose,
  selectedSeats = ["4", "5"],
}) => {
  const [showRecipientForm, setShowRecipientForm] = useState(false);
  const defaultEvent = {
    sec: "102",
    row: "15",
    ...event
  };

  const eventToUse = event || defaultEvent;

  const handleTransferClick = () => {
    setShowRecipientForm(true);
  };

  const handleRecipientSubmit = (data: { 
    firstName: string; 
    lastName: string;
    emailOrPhone: string;
    note: string;
  }) => {
    // Here you would typically handle the transfer submission
    console.log('Transfer data:', {
      ...data,
      event: eventToUse,
      seats: selectedSeats,
    });
    setShowRecipientForm(false);
    onClose();
  };

  if (showRecipientForm) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
      >
        <TransferRecipientForm
          onClose={() => setShowRecipientForm(false)}
          onSubmit={handleRecipientSubmit}
        />
      </Modal>
    );
  }

  return (
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
          <Text style={styles.modalTitle}>SELECT TICKETS TO TRANSFER</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Info Message */}
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="information" size={20} color="#666" />
          <Text style={styles.infoText}>
            Only transfer tickets to people you know and trust to ensure everyone stays safe
          </Text>
        </View>

        {/* Ticket Section */}
        <View style={styles.ticketSection}>
          <Text style={styles.sectionText}>Sec {eventToUse.sec}, Row {eventToUse.row}</Text>
          <Text style={styles.ticketCount}>{selectedSeats.length} Tickets</Text>
        </View>

        {/* Ticket Selection */}
        <View style={styles.ticketSelectionContainer}>
          {selectedSeats.map((seat, index) => (
            <TouchableOpacity key={index} style={styles.ticketItem}>
              <Text style={styles.seatText}>SEAT {seat}</Text>
              <View style={styles.checkmark}>
                <MaterialCommunityIcons name="check" size={20} color="#0066cc" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          <Text style={styles.selectedText}>{selectedSeats.length} Selected</Text>
          <TouchableOpacity 
            style={styles.transferButton}
            onPress={handleTransferClick}
          >
            <Text style={styles.transferButtonText}>TRANSFER TO {'>'}</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 4,
    margin: 16,
  },
  infoText: {
    color: "#666",
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
  ticketSection: {
    backgroundColor: "#0066cc",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  ticketCount: {
    color: "#fff",
    fontSize: 16,
  },
  ticketSelectionContainer: {
    padding: 16,
  },
  ticketItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  seatText: {
    fontSize: 16,
    color: "#000",
  },
  checkmark: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
  },
  transferButton: {
    backgroundColor: "#fff",
  },
  transferButtonText: {
    color: "#0066cc",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TransferTicketsModal; 