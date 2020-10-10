import { StyleSheet } from 'react-native'
import { Theme } from '../types'

const getStyles = (theme: Theme) => StyleSheet.create({
  button: {
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  inverse: {
    backgroundColor: 'transparent',
    borderColor: theme.primaryColor,
    borderWidth: 1,
  },
  loadingIndicator: {
    marginRight: theme.spacing,
  },
  label: {
    paddingVertical: theme.spacing,
    color: 'white',
  },
  inverseLabel: {
    color: 'black',
  }
})

export default getStyles
