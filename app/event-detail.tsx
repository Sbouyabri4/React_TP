import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Event } from '@/types/navigation';

const EventDetailScreen: React.FC = () => {
  // Extract event from route parameters using Expo Router hook
  const { event } = useLocalSearchParams<{ event: string }>();
  
  // Parse the event object (it comes as a JSON string)
  const eventData: Event = event ? JSON.parse(event) : null;

  if (!eventData) {
   return (
      <View style={styles.container}>
        <Text>Event not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Cover Image */}
      <Image source={{ uri: eventData.image }} style={styles.coverImage} />
      
      {/* Title */}
      <Text style={styles.title}>{eventData.title}</Text>
      
      {/* Date and Location */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📅 Date:</Text>
          <Text style={styles.infoValue}>{eventData.date}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>📍 Location:</Text>
          <Text style={styles.infoValue}>{eventData.location}</Text>
        </View>
      </View>
      
      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>About this event</Text>
        <Text style={styles.description}>{eventData.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    width: '100%',
    height: 250,
   resizeMode: 'cover',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 8,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  infoValue: {
    fontSize: 16,
   color: '#555',
    flex: 1,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
   color: '#333',
  },
});

export default EventDetailScreen;
