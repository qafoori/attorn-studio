import { AttornElectronTheme } from '@attorn/electron-theme'
import { accents } from './accents'

export const defaultDark: AttornElectronTheme.Themes = {
  name: 'default-dark',
  theme: {
    ...accents,

    background: '181C23',
    background_50: '181C2380',

    background_150: '161920',

    foreground: '222831',
    foreground_color: 'FFFFFFB3',
    foreground_50: '22283180'
  },
  active: true
}
