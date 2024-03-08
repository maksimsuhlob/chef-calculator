import React from 'react'
import {
  Button, StyleSheet, Text, View,
} from 'react-native'
import { useRouter } from 'expo-router'
import { ThemeColors } from '../../common/constants/theme'
import { NavigationRoutes } from '../../common/constants/navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.pageBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: ThemeColors.primaryColor,
    marginBottom: 40,
  },
  span: {
    height: 30,
  },
})

const RestorePassword = () => {
  const { navigate } = useRouter()

  const handleHome = async () => {
    navigate(NavigationRoutes.home)
  }

  return (
    <View style={styles.container}>
      <Text>Restore your password</Text>
      <Button title="Home" onPress={handleHome} />
    </View>
  )
}

export default RestorePassword
