import React, { Dispatch, SetStateAction } from 'react'
import { Button } from 'react-native'
import { useConfirm } from './src'

interface Props {
  setFeedback: Dispatch<SetStateAction<string>>;
}

const Triggers = ({setFeedback}: Props): JSX.Element => {
  const confirm = useConfirm()

  const handleConfirm = () => {
    setFeedback('Confirmed!')
  }

  const handlePress = () => {
    confirm({
      onConfirm: handleConfirm
    })
  }

  return (
    <Button onPress={ handlePress } title='Basic Confirm' />
  )
}

export default Triggers
