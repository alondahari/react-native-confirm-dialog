import { ConfirmConfig, CurrentConfirm } from './types'
import Dialog from './Dialog'
import React, {
  useState,
} from 'react'
import Actions, { Props as ActionProps } from './Actions'
import defaults from './defaultConfigs'
import { ConfirmContext } from './context'

interface Props {
  children: JSX.Element;
  config?: Partial<ConfirmConfig>
}

const ConfirmProvider = ({ children, config }: Props): JSX.Element => {
  const initial = { ...defaults, ...config, theme: { ...defaults.theme, ...config?.theme } }
  const [current, setCurrent] = useState<Omit<CurrentConfirm, 'setCurrent'>>(
    initial,
  )
  console.log(current)
  const [loading, setLoading] = useState(false)

  const {
    confirmLabel,
    onConfirm,
    cancelLabel,
    actions,
  } = current

  const dismiss = (): void => setCurrent(initial)

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
    confirmLabel,
    cancelLabel,
    handleConfirm,
    loading,
  }

  return (
    <ConfirmContext.Provider value={ { ...current, setCurrent } }>
      {children}
      <Dialog dismiss={dismiss}>
        {
          actions ? actions(dismiss) : <Actions { ...actionProps } />
        }
      </Dialog>
    </ConfirmContext.Provider>
  )
}

export default ConfirmProvider
