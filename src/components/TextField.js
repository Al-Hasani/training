import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

export default function TextField({ name, value, placeholder, onChangeText, keyboardType, autoCapitalize }) {

  keyboardType ? keyboardType : "default";
  autoCapitalize ? autoCapitalize : "none"

  return (
    <TextInput
      name={name}
      style={styles.input}
      value={value}
      autoCompleteType="off"
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    marginVertical: 5,
    borderRadius: 25,
    textAlign: "center",
  }
})
