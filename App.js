import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

function App() {
  const [fontsLoaded] = useFonts({
    'font' : require('./assets/fonts/IndieFlower-Regular.ttf')
  })

  const loadFont = useCallback(async() => {
      if(fontsLoaded)
        await SplashScreen.hideAsync()
    },
    [fontsLoaded],
  )
  if(!fontsLoaded)
    return null;
  
  return (
    <View style={styles.container}  onLayout={loadFont}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'font'
  }
});
