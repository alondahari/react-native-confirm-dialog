import { StyleSheet } from 'react-native'
import { Theme } from '../types'

const getStyles = ({ spacing, backshadowColor }: Theme) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backshadowColor,
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
  subtitle: {
    opacity: 0.8,
    color: 'grey',
    fontWeight: '100',
    fontStyle: 'italic',
  },
  body: {
    paddingVertical: 16,
    fontSize: 13,
    marginBottom: - spacing,
  },
})

export default getStyles
