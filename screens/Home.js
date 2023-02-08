import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>This is Home Screen</Text>
        <Button title='ReviewDetail' onPress={()=> navigation.navigate('ReviewDetail')}/>
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

export default Home

