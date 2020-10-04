import { ConfirmConfig, CurrentConfirm } from './types'
import Dialog from './Dialog'
import React, {
  createContext,
  useState,
} from 'react'
import Actions, { Props as ActionProps } from './Actions'
import defaults from './defaultConfigs'

interface Props {
  children: JSX.Element;
  config: Partial<ConfirmConfig>
}

export const ConfirmContext = createContext<CurrentConfirm>({
  ...defaults,
  setCurrent: undefined,
})

const ConfirmProvider = ({ children, config }: Props): JSX.Element => {
  const [current, setCurrent] = useState<Omit<CurrentConfirm, 'setCurrent'>>(
    { ...defaults, ...config },
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
        title={ title as string }
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
