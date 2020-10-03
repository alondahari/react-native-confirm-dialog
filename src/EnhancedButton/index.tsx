import React from 'react'
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'

export interface Props {
  children: string;
  onPress: VoidFunction;
  style: ViewStyle;
  labelStyle: TextStyle | TextStyle[];
  loading?: boolean;
}

const EnhancedButton = ({ children, onPress, style, labelStyle }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={style} onPress={ onPress }>
      <Text style={ labelStyle }>{children}</Text>
    </TouchableOpacity>
  )
}

export default EnhancedButton
