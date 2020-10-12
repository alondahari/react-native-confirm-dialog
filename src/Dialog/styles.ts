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
    paddingHorizontal: spacing * 4,
    paddingVertical: spacing * 3,
    width: '95%',
  },
  title: {
    fontSize: 19,
  },
  subtitle: {
    marginTop: spacing,
    color: 'grey',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  body: {
    paddingVertical: spacing * 2,
    fontSize: 13,
    marginBottom: - spacing,
  },
})

export default getStyles
