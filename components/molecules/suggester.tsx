import React from 'react'
import { StyleSheet, View } from 'react-native'
import SuggesterItem from '../atoms/suggesterItem'
import { ThemeColors } from '../../common/constants/theme'
import Button from '../atoms/button'

interface IProps {
    suggestions: {id:string, label: string}[]
    onPress: (label:string)=>void
    onClose: ()=>void
}
const styles = StyleSheet.create({
  suggester: {
    borderStyle: 'solid',
    borderColor: ThemeColors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: ThemeColors.pageBackground,
  },
})
const Suggester = ({ suggestions, onPress, onClose }:IProps) => {
  const handlePressItem = (label:string) => { return () => { onPress(label) } }
  const handlePressClose = () => { onClose() }

  if (suggestions.length === 0) {
    return null
  }

  return (
    <View style={styles.suggester}>
      <Button onPress={handlePressClose} name="close" />
      {suggestions.map((item) => {
        return (
          <SuggesterItem
            key={item.id}
            onPress={handlePressItem(item.label)}
            label={item.label}
          />
        )
      })}
    </View>
  )
}

export default Suggester
