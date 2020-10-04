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

  const { cancelLabel, confirmLabel, onConfirm, showCancel } = useContext<CurrentConfirm>(ConfirmContext)

  const handleConfirm = async(): Promise<void> => {
    setLoading(true)
    try {
      onConfirm && await onConfirm()
      dismiss()
    } finally {
      setLoading(false)
    }
  }
  return (
    <View style={ styles.actions }>
      {
        showCancel &&
        <EnhancedButton
          onPress={ dismiss }
          style={ styles.cancel }
          inverse
        >
          { cancelLabel }
        </EnhancedButton>
      }
      <EnhancedButton
        loading={ loading }
        onPress={ handleConfirm }
        style={ styles.confirm }
      >
        { confirmLabel }
      </EnhancedButton>
    </View>
  )
}

export default Actions
