import React, { useContext } from 'react'
import { Stack } from 'expo-router/stack'
import { Provider } from 'react-redux'
import { NavigationRoutes } from '../common/constants/navigation'
import { store } from '../store/store'
import { ThemeColors } from '../theme/colors/colors'
import { ThemeContext } from '../theme/theme'

const RootLayout = () => {
  const theme = useContext(ThemeContext)

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </Provider>
  )
}

export default RootLayout
