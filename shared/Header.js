import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

function Header({ navigation, title }) {
    const openDrawer = () => {
        navigation.openDrawer()
    }
  return (
    <View style={styles.header}>
        <Entypo name="menu" size={24} color="black" onPress={openDrawer}  style={styles.menuButton}/>
        <View>
            <Text style={styles.headerText}>{title}</Text>
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
        justifyContent: "center",
        // backgroundColor: "red"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
        position: "absolute",
        left: "30%",
        top: -10,
    },
    menuButton: {
        position: "absolute",
        left: 0
    }
})

export default Header