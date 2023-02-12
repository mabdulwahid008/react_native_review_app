import React from 'react'
import { StyleSheet, View } from 'react-native'

function Card(props) {
  return (
    <View style={styles.card}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal:10
    }
})

export default Card