import React, { useEffect } from 'react'
import {
  FlatList, Text, View,
} from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { NavigationRoutes } from '../../../common/constants/navigation'
import Button from '../../../components/atoms/button'
import { IProduct } from '../../../services/firebase/stock/interfaces'

const StockPage = () => {
  const { navigate } = useRouter()
  const { setOptions } = useNavigation()

  useEffect(() => {
    setOptions({
      headerRight: renderAddIngredientButton,
    })
  }, [])
  const renderAddIngredientButton = () => {
    return <Button name="add ingredient" onPress={handlePressAddIngredient} />
  }
  const handleProductPress = (productId: string) => {
    return () => {
      navigate({ pathname: NavigationRoutes.product, params: { product: productId } })
    }
  }
  const handlePressAddIngredient = () => {
    navigate({ pathname: NavigationRoutes.addIngredient })
  }
  const renderList = ({ item }: { item: IProduct }) => {
    return <Button name={item.name} onPress={handleProductPress(item.id)} />
  }

  return (
    <View>
      <Text>List of products</Text>
      <FlatList
        data={[]}
        renderItem={renderList}
      />
    </View>
  )
}

export default StockPage
