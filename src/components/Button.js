import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    height: 45,
    alignSelf: "stretch",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  }
});