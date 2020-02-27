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


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TextFiled from './src/components/TextField'
import Button from './src/components/Button'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Test = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Tab.Screen name="ThirdScreen" component={SecondScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [state, setState] = useState({
    name: "Ahmad",
    age: null
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "FirstScreen") {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === "SecondScreen") {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === "ThirdScreen") {
              iconName = focused ? 'play' : 'playcircleo';
            }

            return <Ionicons name={iconName} size={25} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',

        }}
      >
        <Tab.Screen name="FirstScreen" component={Test} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
