import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function App() {
  return (
    <View style={StyleSheet.container}>
      <Text>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App