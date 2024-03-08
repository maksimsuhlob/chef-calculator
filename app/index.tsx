import React from 'react'
import { Redirect } from 'expo-router'
import { NavigationRoutes } from '../common/constants/navigation'

const App = () => {
  return (
    <Redirect href={NavigationRoutes.home} />
  )
}

export default App
