import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

function HomeStack() {
    
  const Stack = createNativeStackNavigator()

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerTintColor: '#444',
      headerStyle:{
        backgroundColor: '#eee'
      },
      }}> 
        <Stack.Screen name="Home" component={Home} options={{title: 'Gamezone'}}/>
        <Stack.Screen name="Review Detail" component={ReviewDetails} />
    </Stack.Navigator>
  // </NavigationContainer>
  )
}

export default HomeStack