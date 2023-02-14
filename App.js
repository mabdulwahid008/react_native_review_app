import * as React from 'react';
import About from './screens/About'
import HomeStack from './stacks/HomeStack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './shared/Header';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{
            headerShown: false
          }}/>
        <Drawer.Screen name="About" component={About} options={({ navigation}) => ({
            headerShown: true, 
            headerTitle: ()=> <Header navigation={navigation}/>, 
            headerLeft: null, 
            drawerIcon: () => null
          })}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

