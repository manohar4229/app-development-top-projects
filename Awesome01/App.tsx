import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet
} from 'react-native'

function App(){
  return (
    <SafeAreaView>
    <View>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Button title='press me' color="orange"  onPress={()=>Alert.alert('simple Hello world app')}/>
    </View>
  </SafeAreaView>
  )
}


export default App;