import { noopFn } from './helpers'
import { CurrentConfirm } from './types'
import EnhancedButton from './EnhancedButton'

const theme = {
  spacing: 8,
  primaryColor: 'rgba(0, 0, 255, 0.5)',
  backshadowColor: 'rgba(0, 0, 0, 0.4)',
}

const defaults: Omit<CurrentConfirm, 'setCurrent'> = {
  ButtonComponent: EnhancedButton,
  open: false,
  title: 'Are you sure?',
  showCancel: true,
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  onConfirm: noopFn,
  theme,
  dismissOnOutsideClick: true,
}

export default defaults
