import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


function ReviewDetails({ data}) {
  console.log(data);
  return (
    <View style={styles.container}>
        <Text>This is ReviewDetails</Text>
        <Text>{data}</Text>
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