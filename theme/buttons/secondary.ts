import { StyleSheet } from 'react-native'
import { ITheme } from '../theme'

export const secondary = (theme:ITheme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.secondaryColor,
      width: 200,
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: theme.colors.whiteText,
    },
  })
}
