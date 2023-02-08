import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import ReviewDetails from './screens/ReviewDetails'

const Stack = createNativeStackNavigator()


function App() {
  const data = "hello wahid"
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ReviewDetail">
            {(props) => <ReviewDetails {...props} data={data}/>}
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



