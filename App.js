import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import  AppLoading  from 'expo-app-loading'

const getFonts = () =>{ 
  return Font.loadAsync({
    'nunito': require('./assets/fonts/Nunito-Bold.ttf')
  })
}
export default function App() {
  const [fontLooaded, setFontLooaded] = useState(false)


  if(fontLooaded)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
  else
    return (
    <AppLoading startAsync={getFonts} onFinish={()=>{setFontLooaded(true)}} onError={()=>{console.log();}}/>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'nunito'
  }
});
