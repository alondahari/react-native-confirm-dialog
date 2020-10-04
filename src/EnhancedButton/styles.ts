import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  inverse: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 0, 255, 0.5)',
    borderWidth: 1,
  },
  label: {
    paddingVertical: 8,
    color: 'white',
  },
  inverseLabel: {
    color: 'black'
  }
})

export default styles
