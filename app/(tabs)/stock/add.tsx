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
import IngredientForm from '../../../components/molecules/ingredientForm'
import { IIngredient } from '../../../services/edamam/edamam-types'

const AddIngredient = () => {
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
  const handleChangeIngredient = (ingredientData:IIngredient) => {
    console.warn('!!!!!!', ingredientData)
  }

  return (
    <View>
      <SearchInput
        onSearch={handleSearch}
        onChange={handleChange}
        onPressCloseSuggester={handlePressCloseSuggester}
        suggestions={autocomplete.map((item) => { return { id: item, label: item } })}
      />
      <IngredientForm data={ingredient} onChange={handleChangeIngredient} />
      <Text>
        {
          JSON.stringify(ingredient, null, 2)
        }
      </Text>
    </View>
  )
}

export default AddIngredient
