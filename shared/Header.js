import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

function Header() {
  return (
    <View style={styles.header}>
        <Entypo name="menu" size={24} color="black"  style={styles.menuButton}/>
        <View>
            <Text style={styles.headerText}>Game Zone</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    menuButton: {
        float: "left"
    }
})

export default Header