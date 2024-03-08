import React, { useState } from 'react'
import {
  Alert, StyleSheet, Text, View,
} from 'react-native'
import { Link, useRouter } from 'expo-router'
import InputLogin from '../../components/atoms/inputLogin'
import ButtonLogin from '../../components/atoms/buttomLogin'
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
    navigate(NavigationRoutes.registration)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Cock book</Text>
      <InputLogin labelText="Email" setValue={setEmail} />
      <InputLogin labelText="Password" setValue={setPassword} secureText />
      <Link href={NavigationRoutes.restorePassword}>Forgot your password?</Link>
      <View style={styles.span} />
      <ButtonLogin buttonText="LOGIN" handleClick={handleLogin} />
      <ButtonLogin buttonText="Be my guest" handleClick={handleGuest} />
      <ButtonLogin buttonText="Registration" handleClick={handleRegistration} />
    </View>
  )
}

export default App
