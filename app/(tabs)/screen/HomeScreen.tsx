import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const recentlyViewed = [
  { id: '1', name: 'Rod Wave', image: require('../../../assets/images/rodwave.jpg') },
  { id: '2', name: 'Doja Cat', image: require('../../../assets/images/doja.jpg') },
];

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerRight}>
          <Text style={styles.locationText}>NYC</Text>
          <Text style={styles.allDealsText}>All Deals</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for artists, venues and events"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../../assets/images/banner.jpg')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Find the perfect gift for every fan.</Text>
          <Text style={styles.bannerSubtitle}>Concert and comedy tickets, festivals, artist merch, VIP packages & more.</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>SHOP GIFTS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Gift Section */}
      <View style={styles.giftSection}>
        <Text style={styles.giftTitle}>Gift the Unforgettable</Text>
        <Text style={styles.giftSubtitle}>This holiday, give concert and comedy tickets, VIP Packages, gift cards and more.</Text>
      </View>

      {/* Recently Viewed */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recently Viewed</Text>
        <Text style={styles.sectionSubtitle}>Jump back into the action.</Text>
        <FlatList
          data={recentlyViewed}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recentItem}>
              <Image source={item.image} style={styles.recentImage} />
              <Text style={styles.recentText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity><Text style={styles.navText}>🔍 Search</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>❤️ For You</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>🎟️ My Events</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>📞 Call</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>👤 My Account</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  header: {
    padding: 10,
    backgroundColor: '#222', // Darker background for header
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 40,
    tintColor: 'white', // Ensure logo is white if it's a template image
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,  // Space between location and deals
  },
  allDealsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#111',  // Slightly lighter black for search bar
  },
  searchInput: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  bannerContainer: {
    // No padding here, image will fill the container
  },
  bannerImage: {
    width: '100%',
    height: 200, // Adjust as needed
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10, // Adjust spacing as needed
  },
  bannerSubtitle: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 5,
  },
  bannerButton: {
    backgroundColor: 'red', // Or a different color
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'center', // Center the button horizontally
  },
  bannerButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  giftSection: {
    padding: 15,
    backgroundColor: '#111',
    marginTop: 10,
  },
  giftTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  giftSubtitle: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 5,
  },
  sectionContainer: {
    padding: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 5,
  },
  recentItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  recentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  recentText: {
    color: '#fff',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#222',
  },
  navText: {
    color: '#fff',
  },
});

export default HomePage;