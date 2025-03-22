import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import AOK from '@/components/AOK';

const aokItems = [
  {
    title: 'App Information',
    content: 'This Ticketmaster clone is a demo application showcasing React Native and Expo capabilities.'
  },
  {
    title: 'Terms of Service',
    content: 'By using this application, you agree to abide by our terms of service. This application is for demonstration purposes only and is not affiliated with Ticketmaster.'
  },
  {
    title: 'Privacy Policy',
    content: 'We respect your privacy. This application does not collect or store any personal information from its users.'
  },
  {
    title: 'Developer Information',
    content: 'This application was developed as a demonstration of mobile application development skills using React Native and Expo.'
  },
  {
    title: 'Acknowledgments',
    content: 'Special thanks to the React Native and Expo communities for their amazing tools and documentation.'
  }
];

export default function AOKScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ThemedText type="title" style={styles.header}>App Information</ThemedText>
        <ThemedText type="subtitle" style={styles.subheader}>Important Knowledge</ThemedText>
        
        <AOK
          title="App Knowledge Base"
          items={aokItems}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  subheader: {
    marginBottom: 24,
  }
}); 