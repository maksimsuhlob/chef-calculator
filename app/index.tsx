import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Button, StyleSheet, Text, View,
} from 'react-native'
import NavLink from '../components/nav-link/nav-link'
import edamamService from '../services/edamam/edamam'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const App = () => {
  return (
    <View style={styles.container}>
      <Text>page 1</Text>
      <NavLink href="/page2" title="page2" />
      <StatusBar style="auto" />
      <Button
        title="getflour"
        onPress={() => { return edamamService.getIngredient('flour') }}
      />
      <Button
        title="autocomplete"
        onPress={() => { return edamamService.getAutoComplete('pep') }}
      />
    </View>
  )
}

export default App

