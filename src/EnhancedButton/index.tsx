import React from 'react'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import styles from './styles'

export interface Props {
  children: string;
  onPress?: VoidFunction;
  style?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  loading?: boolean;
  inverse?: boolean;
}

const EnhancedButton = ({ children, onPress, style, labelStyle, inverse }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.button, inverse && styles.inverse, style]} onPress={ onPress }>
      <Text style={ [styles.label, inverse && styles.inverseLabel, labelStyle] }>{children}</Text>
    </TouchableOpacity>
  )
}

export default EnhancedButton
