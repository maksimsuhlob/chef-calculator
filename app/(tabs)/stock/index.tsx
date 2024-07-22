import React, { useEffect } from 'react'
import {
  FlatList, Text, View,
} from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { NavigationRoutes } from '../../../common/constants/navigation'
import AppButton from '../../../components/atoms/app-button'
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
    return <AppButton text="add ingredient" type="primary" onPress={handlePressAddIngredient} />
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
    return <AppButton text={item.name} type="primary" onPress={handleProductPress(item.id)} />
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
