import React, { useContext } from 'react'
import { Text, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native'
import { ThemeContext } from '../../theme/theme'

interface IProps extends TouchableWithoutFeedbackProps {
    text: string
    type?: 'primary' | 'secondary'
}

const AppButton = ({ text, type, ...props }: IProps) => {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity style={theme.buttons[type]?.button} {...props}>
      <Text style={theme.buttons[type]?.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
