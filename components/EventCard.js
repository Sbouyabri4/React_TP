import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";

const EventCard = ({ event, onPress }) => {
  // State to track if event is favorite
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Function to toggle favorite status
  const toggleFavorite = () => {
  const newStatus = !isFavorite;
   setIsFavorite(newStatus);
   
   // Show native alert when adding to favorites
   if (newStatus) {
     Alert.alert(
       "Succès",
       `${event.title} a été ajouté aux favoris`,
       [{ text: "Compris", style: "default" }]
     );
   }
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />

      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>
            {event.title}
          </Text>
          
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteBtn}>
            <Text style={{ fontSize: 18 }}>{isFavorite ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.date}>Date : {event.date}</Text>
        <Text style={styles.location}>Lieu : {event.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  eventImage: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
   flex: 1, // Title takes remaining space without pushing heart out
  fontSize: 18,
  fontWeight: "bold",
   marginBottom: 8,
  paddingRight: 8,
 lineHeight: 22,
  },
  date: {
    fontSize: 14,
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "#555",
  },
  favoriteBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventCard;