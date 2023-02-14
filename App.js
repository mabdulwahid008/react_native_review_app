import * as React from 'react';
import About from './screens/About'
import HomeStack from './stacks/HomeStack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './stacks/AboutStack';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



