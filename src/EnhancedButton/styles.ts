import { StyleSheet } from 'react-native'
import { Theme } from '../types'

const getStyles = (theme: Theme) => StyleSheet.create({
  button: {
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  inverse: {
    backgroundColor: 'transparent',
    borderColor: theme.primaryColor,
    borderWidth: 1,
  },
  label: {
    paddingVertical: theme.spacing,
    color: 'white',
  },
  inverseLabel: {
    color: theme.primaryColor,
  }
})

export default getStyles
