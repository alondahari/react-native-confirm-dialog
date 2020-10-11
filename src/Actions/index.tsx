import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import EnhancedButton from '../EnhancedButton'
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
    confirmButtonStyle,
    confirmButtonLabelStyle,
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
          style={ [styles.cancel, cancelButtonStyle] }
          labelStyle={ cancelButtonLabelStyle }
          inverse
          {...buttonProps}
        >
          { cancelLabel }
        </ButtonComponent>
      }
      <ButtonComponent
        loading={ loading }
        onPress={ handleConfirm }
        style={ [styles.confirm, confirmButtonStyle] }
        labelStyle={ confirmButtonLabelStyle }
        {...buttonProps}
      >
        { confirmLabel }
      </ButtonComponent>
    </View>
  )
}

export default Actions
