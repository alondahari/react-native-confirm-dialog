import React from 'react'
import { Button } from 'react-native-paper'

interface Props {
  children: string;
}

const MyButton = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Button mode='text' {...props}>{children}</Button>
  )
}

export default MyButton
