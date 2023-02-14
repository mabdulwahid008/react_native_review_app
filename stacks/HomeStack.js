import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

function HomeStack() {
    
  const Stack = createNativeStackNavigator()

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerTintColor: '#444',
      headerStyle:{
        backgroundColor: 'white'
      },
      }}> 
        <Stack.Screen name="Home" component={Home} options={({ navigation })=>({headerTitle: ()=> <Header navigation={navigation}/>})}/>
        <Stack.Screen name="Review Detail" component={ReviewDetails} />
    </Stack.Navigator>
  // </NavigationContainer>
  )
}

export default HomeStack

