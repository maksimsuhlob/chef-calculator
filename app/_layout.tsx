import React from 'react'
import { Stack } from 'expo-router/stack'
import { NavigationRoutes } from '../common/constants/navigation'

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EE99C2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name={NavigationRoutes.login} options={{ title: 'login', headerShown: false }} />
      <Stack.Screen name={NavigationRoutes.restorePassword} options={{ title: 'Restore Password' }} />
      <Stack.Screen name={NavigationRoutes.registration} options={{ title: 'Registration' }} />
    </Stack>
  )
}

export default RootLayout
