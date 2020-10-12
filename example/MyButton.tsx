import React from 'react'
import { EnhancedButtonProps } from 'react-native-confirm-dialog'
import { Button } from 'react-native-paper'

const MyButton = ({ children, ...props }: EnhancedButtonProps): JSX.Element => {
  return (
    <Button {...props}>{children}</Button>
  )
}

export default MyButton
