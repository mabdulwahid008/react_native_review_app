import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


function ReviewDetails({ data, navigation}) {
  return (
    <View style={styles.container}>
        <Text>This is ReviewDetails</Text>
        <Button title='Home' onPress={()=> navigation.navigate('Home')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})

export default ReviewDetails