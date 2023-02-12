import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/globalStyles'


function ReviewDetails({ route, navigation }) {
  const { title, rating, body } = route.params
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
    </View>
  )
}

export default ReviewDetails