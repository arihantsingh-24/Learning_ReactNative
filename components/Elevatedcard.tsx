import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevatedcard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>tp</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>👉</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        margin:10,
      },
      container:{
        padding:8,
      },
      card:{
        flex:1,
        height:100,
        width:100,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:8,
        margin:10,
      },
      cardElevated:{
        backgroundColor: 'grey'
      }
})