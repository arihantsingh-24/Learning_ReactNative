import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card]}>
        <Text
          style={{ fontSize: 15, fontWeight: "semibold", fontStyle: "italic" }}
        >
          Arihant singh
        </Text>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg",
          }}
          style={styles.profile}
        />
        <Text style={styles.description}>
          a statement that tells you how something or someone looks, sounds,
          etc. : words that describe something or someone. [count] Reporters
          called the scene “a disaster area,” and I think that was an accurate
          description. I applied for the position after reading the job
          description.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              openWebsite("https://www.instagram.com/arihant_singh__")
            }
            style={styles.buttonBox}
          >
            <Text style={styles.socailLink}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => 
              openWebsite("https://github.com/arihantsingh-24")
            }
            style={styles.buttonBox}
          >
            <Text style={styles.socailLink}>Github</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    margin: 10,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
  },
  profile: {
    height: 350,
    width: 350,
  },
  description: {
    padding: 10,
    color: "grey",
    fontWeight: "semibold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly", 
    alignItems: "center", 
    marginVertical: 10, 
    width: "100%", 
  },
  buttonBox: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5, 
  },
  socailLink: {
    color: "red",
    fontWeight: "bold", 
    textAlign: "center",
  },
});
