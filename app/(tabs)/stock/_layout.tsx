import React from 'react'
import { Stack } from 'expo-router/stack'

const StockLayout = () => {
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
      <Stack.Screen name="index" options={{ headerShown: true, title: 'stock' }} />
      <Stack.Screen name="[product]" options={{ headerShown: true }} />
    </Stack>
  )
}

export default StockLayout
