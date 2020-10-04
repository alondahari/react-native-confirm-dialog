import React from 'react'
import { Button } from 'react-native'
import { useConfirm } from 'react-native-confirm-dialog'

const Triggers = (): JSX.Element => {
  const confirm = useConfirm()

  const handlePress = () => {
    confirm({
      title: 'Are you sure?',
    })
  }

  return (
    <Button onPress={ handlePress } title='Open Confirm' />
  )
}

export default Triggers
