import React from 'react'
import { View, Text} from 'react-native'
import { globalStyles } from './styles/globalStyles'

function App() {

  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello World</Text>
    </View>
  )
}



export default App