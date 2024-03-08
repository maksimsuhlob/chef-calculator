import React from 'react'
import { Button, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { NavigationRoutes } from '../../../common/constants/navigation'

const StockPage = () => {
  const { navigate } = useRouter()

  return (
    <View>
      <Text>stock</Text>
      <Button
        title="openProduct"
        onPress={() => {
          navigate({ pathname: NavigationRoutes.product, params: { product: 'test' } })
        }}
      />
    </View>
  )
}

export default StockPage
