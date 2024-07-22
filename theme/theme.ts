import { createContext } from 'react'
import { ThemeColors } from './colors/colors'
import { buttons } from './buttons/buttons'

const theme = {
  colors: ThemeColors,

}
const components = {
  buttons: buttons(theme),
}

const themeValue = {
  ...theme,
  ...components,
}

export type ITheme=typeof theme
export type IThemeComponents=typeof components
export type IThemeContext=typeof themeValue

export const ThemeContext = createContext(themeValue)
