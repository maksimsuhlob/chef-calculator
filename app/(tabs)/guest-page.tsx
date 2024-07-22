import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet, Text, View,
} from 'react-native'
import { useRouter } from 'expo-router'
import edamamService from '../../services/edamam/edamam'
import AppButton from '../../components/atoms/app-button'
import { ThemeColors } from '../../theme/colors/colors'
import { NavigationRoutes } from '../../common/constants/navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.pageBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const Page2 = () => {
  const { navigate } = useRouter()

  const handleGoLogin = async () => {
    navigate(NavigationRoutes.login)
  }

  return (
    <View style={styles.container}>
      <Text>Max is a gay, but what a gay he is</Text>
      <AppButton text="Go back to login" type="secondary" onPress={handleGoLogin} />
      <AppButton
        text="getflour"
        type="primary"
        onPress={() => { return edamamService.getIngredient('flour') }}
      />
      <AppButton
        text="autocomplete"
        type="primary"
        onPress={() => { return edamamService.getAutoComplete('pep') }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default Page2

