import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import TextFiled from './src/components/TextField'
import Button from './src/components/Button'

export default function App() {
  const [state, setState] = useState({
    name: "Ahmad",
    age: null
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>Enter your name</Text>

        <TextFiled
          name="name"
          placeholder="name"
          value={state.name}
          onChangeText={text => setState({ ...state, name: text })}
        />
        <TextFiled
          placeholder="age"
          keyboardType="number-pad"
          name="age"
          value={state.age}
          onChangeText={text => setState({ ...state, age: text })}
        />
        <Button text="Submit" onPress={() => {
          if (state.name === "") {
            return Alert.alert('Please enter your name')
          }
          else if (!state.age) {
            return Alert.alert('Please enter your age')
          }
          Alert.alert(`Hello ${state.name} your age is ${state.age}`)
        }} />

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (state.name === "") {
              return Alert.alert('Please enter your name')
            }
            else if (!state.age) {
              return Alert.alert('Please enter your age')
            }
            Alert.alert(`Hello ${state.name} your age is ${state.age}`)
          }}
        >
          <Text>Click Me</Text>
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
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
