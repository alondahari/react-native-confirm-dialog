import { StyleSheet } from 'react-native'
import { Theme } from '../types'

const getStyles = (theme: Theme) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backshadowColor,
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

export default getStyles
