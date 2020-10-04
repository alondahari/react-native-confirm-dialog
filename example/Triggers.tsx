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

  const handleCustomStyle = () => {
    confirm({
      body: 'This cannot be undone.',
      buttonStyle: {
        borderRadius: 30,
        paddingVertical: 8,
      },
      confirmButtonLabelStyle: {
        fontWeight: 'bold',
      },
      theme: {
        spacing: 4,
        backshadowColor: 'rgba(0, 0, 200, 0.4)'
      }
    })
  }

  return (
    <>
      <Button onPress={ handleBasicConfirm } title='Basic Confirm' />
      <Button onPress={ handleAsyncConfirm } title='Async Confirm' />
      <Button onPress={ handleAlert } title='Alert' />
      <Button onPress={ handleCustomStyle } title='Custom Styles' />
    </>
  )
}

export default Triggers
