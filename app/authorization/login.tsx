import React, { useState } from 'react'
import {
  Alert, StyleSheet, Text, View,
} from 'react-native'
import { Link, useRouter } from 'expo-router'
import InputLogin from '../../components/atoms/inputLogin'
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

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { navigate } = useRouter()

  const handleLogin = async () => {
    // Here you can implement the login logic
    console.warn('Email:', email)
    console.warn('Password:', password)

    Alert.alert(
      'Error!',
      'Invalid you are. Go to sign up',
      [
        { text: 'OK', onPress: () => { return console.warn('OK Pressed') } },
      ],
      { cancelable: false },
    )
  }

  const handleGuest = async () => {
    navigate(NavigationRoutes.guestPage)
  }
  const handleRegistration = async () => {
    navigate(NavigationRoutes.authorization('registration'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Cock book</Text>
      <InputLogin labelText="Email" setValue={setEmail} />
      <InputLogin labelText="Password" setValue={setPassword} secureText />
      <Link href={NavigationRoutes.authorization('restore-password')}>Forgot your password?</Link>
      <View style={styles.span} />
      <AppButton text="LOGIN" type="secondary" onPress={handleLogin} />
      <AppButton text="Be my guest" type="secondary" onPress={handleGuest} />
      <AppButton text="Registration" type="secondary" onPress={handleRegistration} />
    </View>
  )
}

export default App
