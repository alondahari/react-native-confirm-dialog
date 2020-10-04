import React from 'react'
import { Button } from 'react-native'
import { useConfirm } from './src'

const Triggers = (): JSX.Element => {
  const confirm = useConfirm()

  const handlePress = () => {
    confirm()
  }

  return (
    <Button onPress={ handlePress } title='Open Confirm' />
  )
}

export default Triggers
