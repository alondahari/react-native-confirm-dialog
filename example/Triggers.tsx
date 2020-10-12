import React, { Dispatch, SetStateAction } from 'react'
import { Button } from 'react-native'
import { useConfirm } from 'react-native-confirm-dialog'
import CustomActions from './CustomActions'
import MyButton from './MyButton'

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
      onConfirm: handleConfirm(1000),
      body: 'This might take a second',
    })
  }

  const handleAlert = () => {
    confirm({
      showCancel: false,
      confirmLabel: 'Got it',
      title: 'Pay attention!',
      subtitle: 'here it comes...',
      body: 'Consider yourself alerted!',
      dismissOnOutsideClick: false,
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
      titleStyle: {
        fontSize: 22,
      },
      bodyStyle: {
        color: 'red',
      },
      theme: {
        spacing: 4,
        backshadowColor: 'rgba(0, 0, 100, 0.4)'
      }
    })
  }

  const handleCustomButton = () => {
    confirm({
      ButtonComponent: MyButton,
      buttonProps: {
        mode: 'outlined',
      },
      onConfirm: handleConfirm(1000),
      cancelLabel: 'No',
      confirmLabel: 'Yes',
      confirmButtonLabelStyle: {
        color: 'black',
      },
      cancelButtonStyle: {
        borderWidth: 0,
      }
    })
  }

  const handleCustomActions = () => {
    confirm({
      actions: (dismiss) =>
        <CustomActions
          onCompleted={ () => setFeedback('Signed up!') }
          dismiss={dismiss}
        />,
      title: 'Subscribe to our newsletter?',
      body: 'For only $12.99 / month, you can get so much content your head will overheat!'
    })
  }

  return (
    <>
      <Button onPress={ handleBasicConfirm } title='Basic Confirm' />
      <Button onPress={ handleAsyncConfirm } title='Async Confirm' />
      <Button onPress={ handleAlert } title='Alert' />
      <Button onPress={ handleCustomStyle } title='Custom Styles' />
      <Button onPress={ handleCustomButton } title='Custom Button' />
      <Button onPress={ handleCustomActions } title='Custom Actions' />
    </>
  )
}

export default Triggers
