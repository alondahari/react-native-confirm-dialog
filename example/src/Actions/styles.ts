import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  actions: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cancel: {
    borderColor: 'black',
    flex: 1,
    marginRight: 8,
  },
  confirm: {
    flex: 2,
  },
  blackLabel: {
    color: 'black',
  },
})

export default styles
