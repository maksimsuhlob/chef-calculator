import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeColors } from '../../common/constants/theme'
import Input from '../atoms/input'
import Button from '../atoms/button'
import Suggester from './suggester'

interface IProps {
    value?: string,
    onSearch: (value: string)=>void
    onChange?: (value: string)=>void
    onPressCloseSuggester?: ()=>void
    suggestions?: {id: string, label: string}[]
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  suggesterContainer: {
    position: 'absolute',
    top: 60,
    flex: 1,
    width: '100%',
    zIndex: 100,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputText: {
    width: 200,
    height: 50,
    color: ThemeColors.blackText,
  },
  inputView: {
    width: '80%',
    backgroundColor: ThemeColors.backgroundColor,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
})
const SearchInput = ({
  value,
  onSearch,
  onChange,
  suggestions,
  onPressCloseSuggester,
}: IProps) => {
  const [searchString, setSearchString] = useState(value || '')

  useEffect(() => {
    setSearchString(value)
  }, [value])

  const handleChangeSearchString = (inputValue: string) => {
    setSearchString(inputValue)
    if (onChange) {
      onChange(inputValue)
    }
  }
  const handleSearchButtonClick = () => {
    onSearch(searchString)
  }

  const handlePressSuggestion = (label:string) => {
    setSearchString(label)
  }
  const handlePressClose = () => {
    if (onPressCloseSuggester) {
      onPressCloseSuggester()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input value={searchString} labelText="Search" setValue={handleChangeSearchString} />
        <Button name="search" onPress={handleSearchButtonClick} />
      </View>
      <View style={styles.suggesterContainer}>
        <Suggester suggestions={suggestions} onPress={handlePressSuggestion} onClose={handlePressClose} />
      </View>
    </View>
  )
}

export default SearchInput
