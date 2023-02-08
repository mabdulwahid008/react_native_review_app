import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


function ReviewDetails() {
  return (
    <View style={styles.container}>
        <Text>This is ReviewDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default ReviewDetails