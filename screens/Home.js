import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

function Home({route, navigation }) {
  useEffect(() => {
    console.log(route.params);
   
    
  }, [route.params?.itemId])
  
  return (
    <View style={styles.container}>
        <Text>This is Home Screen</Text>
        <Button title='ReviewDetail' onPress={()=> navigation.navigate('ReviewDetail',  {itemId: 5, other: "hello"})}/>
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

