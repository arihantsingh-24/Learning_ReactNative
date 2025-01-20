import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        margin: 10,
      },
})