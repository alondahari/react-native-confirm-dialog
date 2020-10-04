import { StyleSheet } from 'react-native'
import { Theme } from '../types'

const getStyles = ({ spacing }: Theme) => StyleSheet.create({
  actions: {
    paddingTop: spacing * 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancel: {
    borderColor: 'black',
    flex: 1,
    marginRight: spacing,
  },
  confirm: {
    flex: 2,
  },
  blackLabel: {
    color: 'black',
  },
})

export default getStyles
