import { noopFn } from './helpers'
import { CurrentConfirm } from './types'

const defaults: Omit<CurrentConfirm, 'setCurrent'> = {
  open: false,
  title: 'Are you sure?',
  showCancel: true,
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  onConfirm: noopFn,
}

export default defaults
