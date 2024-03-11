import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useDebounce } from '@uidotdev/usehooks'
import SearchInput from '../../../components/molecules/searchInput'
import {
  clearAutocomplete, clearIngredient,
  getIngredientAction,
  getIngredientAutocompleteAction,
  selectStock,
} from '../../../store/stockSlice'
import { useAppDispatch, useAppSelector } from '../../../store/store'

const StockPage = () => {
  const dispatch = useAppDispatch()
  const { ingredient, autocomplete } = useAppSelector(selectStock)
  const [searchString, setSearchString] = useState('')
  const debouncedSearchString = useDebounce(searchString, 300)

  useEffect(() => {
    return () => {
      dispatch(clearIngredient())
    }
  }, [])
  useEffect(() => {
    if (searchString) {
      dispatch(getIngredientAutocompleteAction(searchString))
    }
  }, [debouncedSearchString])
  const handleSearch = (value:string) => {
    if (value) {
      dispatch(getIngredientAction(value))
    }
  }
  const handleChange = (value:string) => {
    setSearchString(value)
    dispatch(clearAutocomplete())
  }
  const handlePressCloseSuggester = () => {
    dispatch(clearAutocomplete())
  }

  return (
    <View>
      <SearchInput
        onSearch={handleSearch}
        onChange={handleChange}
        onPressCloseSuggester={handlePressCloseSuggester}
        suggestions={autocomplete.map((item) => { return { id: item, label: item } })}
      />
      <Text>
        {
          JSON.stringify(ingredient, null, 2)
        }
      </Text>
    </View>
  )
}

export default StockPage
