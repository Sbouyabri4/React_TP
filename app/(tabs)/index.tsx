import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import EventCard from "../../components/EventCard";
import events from "../../data/event";

export default function HomeScreen() {
  const router = useRouter();
  
  // State for all events
  const [eventsList] = useState(events);
  
  // State for search query (text input)
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleEventPress = (event: import('@/types/navigation').Event) => {
    // Navigate to event detail screen with event data as stringified JSON
    router.push(`/event-detail?event=${encodeURIComponent(JSON.stringify(event))}`);
  };
  
  // Filter events based on search query (title and location)
  const filteredEvents = eventsList.filter((event) => {
   const query = searchQuery.toLowerCase();
   return (
      event.title.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query)
    );
  });
  
 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Événements à venir</Text>
        
        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un événement ou une ville..."
          placeholderTextColor="#9090AA"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item} 
            onPress={() => handleEventPress(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontSize: 16,
   color: '#1A1A2E',
    marginTop: 12,
    width: '100%',
  },
  list: {
    paddingBottom: 16,
  },
});
