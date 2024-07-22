import { primary } from './primary'
import { ITheme } from '../theme'
import { secondary } from './secondary'

export const buttons = (theme:ITheme) => {
  return {
    primary: primary(theme),
    secondary: secondary(theme),
  }
}
