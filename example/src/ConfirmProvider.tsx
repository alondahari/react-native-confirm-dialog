import { ConfirmConfig, CurrentConfirm } from './types'
import Dialog from './Dialog'
import React, {
  useState,
} from 'react'
import Actions from './Actions'
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

  const { actions } = current

  const dismiss = (): void => setCurrent(initial)

  return (
    <ConfirmContext.Provider value={ { ...current, setCurrent } }>
      {children}
      <Dialog dismiss={dismiss}>
        {
          actions ? actions(dismiss) : <Actions dismiss={ dismiss } />
        }
      </Dialog>
    </ConfirmContext.Provider>
  )
}

export default ConfirmProvider
