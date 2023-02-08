import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
        <Text>This is Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Home