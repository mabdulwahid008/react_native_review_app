import * as React from 'react';
import About from './screens/About'
import HomeStack from './stacks/HomeStack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './shared/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{headerShown: true, headerLeft: null, 
            drawerIcon: () => null}}>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{
            headerShown: false
          }}/>
        <Drawer.Screen name="AboutStack" component={AboutStack} options={{
            headerShown: false
          }}/>
        {/* <Drawer.Screen name="About" component={About} options={({ navigation}) => ({
            // headerShown: true, 
            headerTitle: ()=> <Header navigation={navigation} title="About Gamezone"/>, 
          })}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function AboutStack () {
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

