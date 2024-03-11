import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { ThemeColors } from '../../common/constants/theme'

interface IProps {
    labelText: string
    value?: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    secureText?: boolean
}

const styles = StyleSheet.create({
  inputText: {
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
    borderStyle: 'solid',
    borderColor: ThemeColors.primaryColor,
    borderWidth: 1,
  },
})

const Input = ({
  value, labelText, setValue, secureText,
}: IProps) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        value={value}
        style={styles.inputText}
        placeholder={labelText}
        placeholderTextColor="#003f5c"
        secureTextEntry={secureText ?? false}
        onChangeText={(text) => { return setValue(text) }}
      />
    </View>
  )
}

export default Input
