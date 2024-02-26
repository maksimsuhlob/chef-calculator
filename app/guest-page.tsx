import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Button, StyleSheet, Text, View,
} from 'react-native'
import { router } from 'expo-router'
import edamamService from '../services/edamam/edamam'
import ButtonLogin from '../components/atoms/buttomLogin'
import { ThemeColors } from '../common/constants/theme'
import { NavigationRoutes } from '../common/constants/navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.pageBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const Page2 = () => {
  const handleGoLogin = async () => {
    router.navigate(NavigationRoutes.login)
  }

  return (
    <View style={styles.container}>
      <Text>Max is a gay, but what a gay he is</Text>
      <ButtonLogin buttonText="Go back to login" handleClick={handleGoLogin} />
      <Button
        title="getflour"
        onPress={() => { return edamamService.getIngredient('flour') }}
      />
      <Button
        title="autocomplete"
        onPress={() => { return edamamService.getAutoComplete('pep') }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default Page2

