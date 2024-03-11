import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useLocalSearchParams, useNavigation } from 'expo-router'

const StockPage = () => {
  const { product } = useLocalSearchParams<{product: string}>()
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      title: `Product ${product}`,
    })
  }, [product])

  return (
    <View>
      <Text>
        product
        {product}
      </Text>
    </View>
  )
}

export default StockPage
