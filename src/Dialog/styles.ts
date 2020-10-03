import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 38, 62, 0.69);',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 36,
    paddingVertical: 28,
    width: '95%',
  },
  title: {
    fontSize: 19,
    paddingBottom: 16,
  },
  body: {
    marginBottom: 8,
  },
  copy: {
    paddingBottom: 16,
    fontSize: 13,
  },
})

export default styles
