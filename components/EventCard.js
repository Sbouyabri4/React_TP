import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const EventCard = ({ event }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.eventImage} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{event.title}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "#555",
  },
});

export default EventCard;