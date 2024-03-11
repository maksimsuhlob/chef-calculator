import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { NavigationRoutes } from '../../common/constants/navigation'

const TabLayout = () => {
  const renderHomeIcon = ({ color }) => { return <FontAwesome size={28} name="home" color={color} /> }
  const renderGuestIcon = ({ color }) => { return <FontAwesome size={28} name="users" color={color} /> }
  const renderStockIcon = ({ color }) => { return <FontAwesome size={28} name="th-list" color={color} /> }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name={NavigationRoutes.home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tabs.Screen
        name={NavigationRoutes.guestPage}
        options={{
          title: 'guest page',
          tabBarIcon: renderGuestIcon,
        }}
      />
      <Tabs.Screen
        name={NavigationRoutes.stock}
        options={{
          title: 'stock',
          headerShown: false,
          tabBarIcon: renderStockIcon,
        }}
      />
    </Tabs>
  )
}

export default TabLayout
