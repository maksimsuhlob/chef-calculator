import { StyleSheet } from 'react-native'
import { ITheme } from '../theme'

export const primary = (theme:ITheme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primaryColor,

      paddingHorizontal: 5,
      paddingVertical: 5,
      marginBottom: 5,
      borderRadius: 5,
      marginHorizontal: 5,
      width: 'auto',
    },
    buttonText: {
      color: theme.colors.whiteText,
    },
  })
}
