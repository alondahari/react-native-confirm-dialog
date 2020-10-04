import React from 'react'
import { View } from 'react-native'
import EnhancedButton from '../EnhancedButton'
import styles from './styles'

export interface Props {
  dismiss: VoidFunction;
  cancelLabel: string;
  loading: boolean;
  handleConfirm: VoidFunction;
  confirmLabel: string;
}

const Actions = ({ dismiss, loading, cancelLabel, confirmLabel, handleConfirm }: Props): JSX.Element => {
  return (
    <View style={ styles.actions }>
      <EnhancedButton
        onPress={ dismiss }
        style={ styles.cancel }
        inverse
      >
        { cancelLabel }
      </EnhancedButton>
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
