import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View>
        <Image
          source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/375px-Taj_Mahal_%28Edited%29.jpeg'
          }}
          style={styles.cardimage}
        />
        <View style={[styles.cardBody, styles.Elevated]}>
          <Text style={{color:'black', fontSize:20, fontWeight: "bold"}}>Taj Mahal</Text>
          <Text style={{color:'black'}}>Agra</Text>
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
  card: {},
  Elevated:{
    backgroundColor:'white',
    elevation: 3,
    shadowOffset:{
      width:2,
      height:2,
    }
  },
  cardimage:{
    height: 200,
    margin:25,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
  },
  cardBody:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  },
});
