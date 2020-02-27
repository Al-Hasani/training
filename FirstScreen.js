import React from 'react'
import { View, Text } from 'react-native'
import Button from './src/components/Button';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        text="Go To Second Screen"
        onPress={() => navigation.navigate('ThirdScreen')}
      />
    </View>
  )
}

export default FirstScreen
