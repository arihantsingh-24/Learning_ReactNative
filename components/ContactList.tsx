import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";

interface Contact {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
  }

export default function ContactList() {
  const contacts:Contact[] = [
    {
      id: "1",
      name: "John Doe",
      role: "Software Engineer",
      description:
        "Passionate about building scalable and efficient software systems.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "Product Manager",
      description:
        "Experienced in leading cross-functional teams to deliver outstanding products.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "3",
      name: "Emily Davis",
      role: "UI/UX Designer",
      description: "Focused on creating intuitive and user-friendly designs.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "4",
      name: "Michael Johnson",
      role: "Data Scientist",
      description: "Specialized in machine learning and data analysis.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];
  const renderContact = ({ item }: { item: Contact }) => (
    <View style={styles.usercard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.userinfo}>{item.name}</Text>
      <Text style={styles.userinfo}>{item.role}</Text>
      <Text style={styles.userinfo}>{item.description}</Text>
    </View>
  );
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <FlatList
        style={styles.container}
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        contentContainerStyle={{padding:10}}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    margin: 10,
  },
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  usercard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  userinfo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
});
