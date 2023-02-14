import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Header } from 'react-navigation-stack'


const Stack = createNativeStackNavigator()

function AboutStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerTintColor: '#444',
          headerStyle:{
            backgroundColor: 'white'
          },
          }}> 
           <Stack.Screen name="About" component={About} options={({ navigation })=>({headerTitle: ()=> <Header navigation={navigation} title="About"/>})}/>
        </Stack.Navigator>
      )
}

export default AboutStack