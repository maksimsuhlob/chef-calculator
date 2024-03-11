import React from 'react'
import { Stack } from 'expo-router/stack'
import { ThemeColors } from '../../../common/constants/theme'

const StockLayout = () => {
  return (
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
      <Stack.Screen name="index" options={{ headerShown: true, title: 'stock' }} />
      <Stack.Screen name="add" options={{ headerShown: true }} />
      <Stack.Screen name="[product]" options={{ headerShown: true }} />
    </Stack>
  )
}

export default StockLayout
