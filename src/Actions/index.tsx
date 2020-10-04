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
        labelStyle={ [ styles.label, styles.blackLabel ] }
      >
        { cancelLabel }
      </EnhancedButton>
      <EnhancedButton
        loading={ loading }
        labelStyle={ styles.label }
        onPress={ handleConfirm }
        style={ styles.confirm }
      >
        { confirmLabel }
      </EnhancedButton>
    </View>
  )
}

export default Actions
