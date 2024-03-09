import React from 'react'
import {
  StyleSheet, Text, View,
} from 'react-native'

import { useRouter } from 'expo-router'
import { ThemeColors } from '../../common/constants/theme'
import ButtonLogin from '../../components/atoms/buttomLogin'
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

const Home = () => {
  const { navigate } = useRouter()
  const handleLogin = async () => {
    navigate(NavigationRoutes.authorization('login'))
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <ButtonLogin buttonText="login" handleClick={handleLogin} />
    </View>
  )
}

export default Home
