import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ThemeColors } from '../../common/constants/theme'

interface IProps {
    buttonText: string
    handleClick: () => Promise<void>
}

const styles = StyleSheet.create({
  PrimButton: {
    width: 200,
    backgroundColor: ThemeColors.secondaryColor,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  PrimButtonText: {
    color: ThemeColors.whiteText,
  },
})

const ButtonLogin = ({ buttonText, handleClick }: IProps) => {
  return (
    <TouchableOpacity style={styles.PrimButton} onPress={() => { return handleClick() }}>
      <Text style={styles.PrimButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLogin
