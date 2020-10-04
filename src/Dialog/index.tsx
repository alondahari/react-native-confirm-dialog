import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import getStyles from './styles'
import { ConfirmContext } from '../ConfirmProvider'
import { CurrentConfirm } from '../types'

interface Props {
  title: string;
  subtitle?: string;
  message?: string;
  open: boolean;
  children: JSX.Element | JSX.Element[];
  dismiss: VoidFunction;
}

const Index = ({
  title,
  subtitle,
  message,
  open,
  children,
  dismiss,
}: Props): JSX.Element => {
  const { theme } = useContext<CurrentConfirm>(ConfirmContext)
  const styles = getStyles(theme)

  return (
    <Modal
      visible={ open }
      animationType='fade'
      transparent
      presentationStyle='overFullScreen'
    >
      <TouchableWithoutFeedback onPress={ dismiss }>
        <View style={ styles.centeredView }>
          <TouchableWithoutFeedback>
            <View style={ styles.modalView }>
              <Text style={ styles.title }>
                {title}
              </Text>
              <View style={ styles.body }>
                {subtitle && <Text style={ styles.copy }>{subtitle}</Text>}
                {message && <Text style={ styles.copy }>{message}</Text>}
              </View>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default Index
