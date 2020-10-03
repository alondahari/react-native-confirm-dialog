import { CurrentConfirm } from 'types'
import { noopFn } from 'helpers'
import Dialog from './Dialog'
import React, {
  createContext,
  useState,
} from 'react'
import Actions, { Props as ActionProps } from 'Actions'

interface Props {
  children: JSX.Element;
}

const defaults: Omit<CurrentConfirm, 'setCurrent'> = {
  open: false,
  title: 'Are you sure?',
  showCancel: true,
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
  onConfirm: noopFn,
}

export const ConfirmContext = createContext<CurrentConfirm>({
  ...defaults,
  setCurrent: undefined,
})

const ConfirmProvider = ({ children }: Props): JSX.Element => {
  const [current, setCurrent] = useState<Omit<CurrentConfirm, 'setCurrent'>>(
    defaults
  )
  const [loading, setLoading] = useState(false)

  const {
    open,
    title,
    subtitle,
    body,
    confirmLabel,
    onConfirm,
    cancelLabel,
    actions,
  } = current

  const dismiss = (): void => setCurrent(defaults)

  const handleConfirm = async(): Promise<void> => {
    setLoading(true)
    try {
      onConfirm && await onConfirm()
      dismiss()
    } finally {
      setLoading(false)
    }
  }

  const actionProps: ActionProps = {
    dismiss,
    confirmLabel: confirmLabel as string,
    cancelLabel: cancelLabel as string,
    handleConfirm,
    loading,
  }

  return (
    <ConfirmContext.Provider value={ { ...current, setCurrent } }>
      {children}
      <Dialog
        open={ open }
        title={ title }
        subtitle={ subtitle }
        message={ body }
        dismiss={ dismiss }
      >
        {
          actions ? actions(dismiss) : <Actions { ...actionProps } />
        }
      </Dialog>
    </ConfirmContext.Provider>
  )
}

export default ConfirmProvider
