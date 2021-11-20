import { AttornElectronTheme } from '@attorn/electron-theme'
import { accents } from './accents'

export const defaultLight: AttornElectronTheme.Themes = {
  name: 'default-light',
  theme: {
    ...accents,

    background: 'F2F2F2',
    background_50: 'F2F2F280',

    foreground: 'FCFCFC',
    foreground_color: '000000DB',
    foreground_50: 'FCFCFC80'
  }
}
