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
  },
  body: {
    marginBottom: 8,
  },
  subtitle: {
    paddingTop: 4,
    opacity: 0.8,
    color: 'grey',
    fontWeight: '100',
    fontStyle: 'italic',
  },
  copy: {
    paddingVertical: 16,
    fontSize: 13,
  },
})

export default getStyles
