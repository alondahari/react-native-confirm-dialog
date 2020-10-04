import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancel: {
    borderColor: 'black',
    flex: 1,
  },
  confirm: {
    flex: 2,
    marginLeft: 8,
  },
  blackLabel: {
    color: 'black',
  },
})

export default styles
