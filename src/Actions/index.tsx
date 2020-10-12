import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import getStyles from './styles'
import { ConfirmContext } from '../context'
import { CurrentConfirm } from '../types'

export interface Props {
  dismiss: VoidFunction;
}

const Actions = ({ dismiss }: Props): JSX.Element => {
  const { theme } = useContext<CurrentConfirm>(ConfirmContext)
  const styles = getStyles(theme)

  const [loading, setLoading] = useState(false)

  const {
    cancelLabel,
    confirmLabel,
    onConfirm,
    showCancel,
    cancelButtonStyle,
    cancelButtonLabelStyle,
    cancelButtonProps,
    confirmButtonStyle,
    confirmButtonLabelStyle,
    confirmButtonProps,
    ButtonComponent,
    buttonProps
  } = useContext<CurrentConfirm>(ConfirmContext)

  const handleConfirm = async(): Promise<void> => {
    setLoading(true)
    try {
      await onConfirm()
      dismiss()
    } catch {
      setLoading(false)
    }
  }

  return (
    <View style={ styles.actions }>
      {
        showCancel &&
        <ButtonComponent
          onPress={ dismiss }
          inverse
          {...buttonProps}
          {...cancelButtonProps}
          style={ [styles.cancel, buttonProps?.style, cancelButtonProps?.style, cancelButtonStyle] }
          labelStyle={ [buttonProps?.labelStyle, cancelButtonProps?.labelStyle, cancelButtonLabelStyle] }
        >
          { cancelLabel }
        </ButtonComponent>
      }
      <ButtonComponent
        loading={ loading }
        onPress={ handleConfirm }
        {...buttonProps}
        {...confirmButtonProps}
        style={ [styles.confirm, buttonProps?.style, confirmButtonProps?.style, confirmButtonStyle] }
        labelStyle={ [buttonProps?.labelStyle, confirmButtonProps?.labelStyle, confirmButtonLabelStyle] }
      >
        { confirmLabel }
      </ButtonComponent>
    </View>
  )
}

export default Actions
