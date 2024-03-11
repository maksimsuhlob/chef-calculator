import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeColors } from '../../common/constants/theme'

interface IProps {
    onPress: ()=>void
    name: string,
}
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: ThemeColors.primaryColor,
    marginBottom: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 'auto',
  },
  buttonText: {
    color: ThemeColors.whiteText,
  },
})
const Button = ({ onPress, name }:IProps) => {
  const handlePress = () => {
    onPress()
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button
