import React, { Dispatch, SetStateAction } from 'react'
import { Button } from 'react-native'
import { useConfirm } from './src'

interface Props {
  setFeedback: Dispatch<SetStateAction<string>>;
}

const Triggers = ({setFeedback}: Props): JSX.Element => {
  const confirm = useConfirm()

  const handleConfirm = (sleepTime = 0) => () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        setFeedback('Confirmed!')
      }, sleepTime)
    })
  }

  const handleBasicConfirm = () => {
    confirm({
      onConfirm: handleConfirm()
    })
  }

  const handleAsyncConfirm = () => {
    confirm({
      onConfirm: handleConfirm(1000)
    })
  }

  const handleAlert = () => {
    confirm({
      showCancel: false,
      confirmLabel: 'Got it',
      title: 'Pay attention!',
      subtitle: 'here it comes...',
      body: 'Consider yourself alerted!',
    })
  }

  return (
    <>
      <Button onPress={ handleBasicConfirm } title='Basic Confirm' />
      <Button onPress={ handleAsyncConfirm } title='Async Confirm' />
      <Button onPress={ handleAlert } title='Alert' />
    </>
  )
}

export default Triggers
