import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Collapsible } from './Collapsible';

interface AOKItem {
  title: string;
  content: string;
}

interface AOKProps {
  title?: string;
  items: AOKItem[];
  className?: string;
}

const AOK: React.FC<AOKProps> = ({ 
  title = "Acknowledgment of Knowledge", 
  items,
  className = ""
}) => {
  return (
    <ThemedView className={`p-4 rounded-lg ${className}`}>
      <ThemedText className="text-xl font-bold mb-4">{title}</ThemedText>
      <ScrollView className="max-h-96">
        {items.map((item, index) => (
          <Collapsible
            key={index}
            title={item.title}
          >
            <ThemedText className="mt-2 text-sm">{item.content}</ThemedText>
          </Collapsible>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default AOK; 