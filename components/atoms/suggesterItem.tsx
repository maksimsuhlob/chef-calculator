import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface IProps {
    onPress: (label:string)=>void
    label: string
}
const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 'auto',
  },
})
const SuggesterItem = ({ label, onPress }:IProps) => {
  const handlePress = () => { onPress(label) }

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default SuggesterItem
