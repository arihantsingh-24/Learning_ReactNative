import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default Flatcard;

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      color: "#ffffff",
      fontWeight: "bold",
      margin:10,
    },
    container:{
      flex: 1,
      flexDirection: 'row',
      margin: 10
    },
    card:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      height:100,
      width:100,
      margin:4,
      borderRadius:5,
    },
    cardOne:{
      backgroundColor: "red"
    },
    cardTwo:{
  backgroundColor: "green"
    },
    cardThree:{
  backgroundColor: "blue"
    },
  });
