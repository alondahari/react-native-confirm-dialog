import React, { useContext } from 'react'
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import { ConfirmContext } from '../context'
import { CurrentConfirm } from '../types'
import getStyles from './styles'

export interface Props {
  children: string;
  onPress?: VoidFunction;
  style?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  loading?: boolean;
  inverse?: boolean;
}

const EnhancedButton = ({ children, onPress, style, labelStyle, inverse, loading }: Props): JSX.Element => {
  const { theme } = useContext<CurrentConfirm>(ConfirmContext)
  const styles = getStyles(theme)

  return (
    <TouchableOpacity style={[styles.button, inverse && styles.inverse, style]} onPress={ onPress }>
      { loading && <ActivityIndicator color={inverse ? 'black' : 'white'} style={styles.loadingIndicator }/> }
      <Text style={ [styles.label, inverse && styles.inverseLabel, labelStyle] }>{children}</Text>
    </TouchableOpacity>
  )
}

export default EnhancedButton
