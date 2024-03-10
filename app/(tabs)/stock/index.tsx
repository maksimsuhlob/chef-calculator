import React from 'react'
import {
  Button,
  FlatList, Text, View,
} from 'react-native'
import { useRouter } from 'expo-router'
import { NavigationRoutes } from '../../../common/constants/navigation'
import ProductButton from '../../../components/atoms/productButton'
import { IProduct } from '../../../services/firebase/stock/interfaces'
import { useAppDispatch } from '../../../store/store'
import { getIngredientAction } from '../../../store/stockSlice'

const StockPage = () => {
  const { navigate } = useRouter()
  const dispatch = useAppDispatch()
  const handleProductPress = (productId: string) => {
    return () => {
      navigate({ pathname: NavigationRoutes.product, params: { product: productId } })
    }
  }
  const renderList = ({ item }: { item: IProduct }) => {
    return <ProductButton name={item.name} onPress={handleProductPress(item.id)} />
  }

  return (
    <View>
      <Text>List of products</Text>
      <Button title="test" onPress={() => { return dispatch(getIngredientAction('flour')) }} />
      <FlatList
        data={[]}
        renderItem={renderList}
      />
    </View>
  )
}

export default StockPage
