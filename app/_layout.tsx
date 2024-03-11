import React from 'react'
import { Stack } from 'expo-router/stack'
import { Provider } from 'react-redux'
import { NavigationRoutes } from '../common/constants/navigation'
import { store } from '../store/store'
import { ThemeColors } from '../common/constants/theme'

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: ThemeColors.secondaryColor,
          },
          headerTintColor: ThemeColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationRoutes.authorization('login')}
          options={{ title: 'login', headerShown: false }}
        />
        <Stack.Screen
          name={NavigationRoutes.authorization('restore-password')}
          options={{ title: 'Restore Password' }}
        />
        <Stack.Screen
          name={NavigationRoutes.authorization('registration')}
          options={{ title: 'Registration' }}
        />
      </Stack>
    </Provider>
  )
}

export default RootLayout
