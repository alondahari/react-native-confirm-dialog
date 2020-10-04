import {
  ConfirmConfig,
  CurrentConfirm,
} from './types'
import { useContext } from 'react'
import { ConfirmContext } from './context'

type ConfirmHook = (config?: ConfirmConfig) => void

const useConfirm = (): ConfirmHook => {
  const { setCurrent, ...current } = useContext<CurrentConfirm>(ConfirmContext)

  return (config?: ConfirmConfig): void => {
    setCurrent &&
      setCurrent({
        ...current,
        open: true,
        ...config,
        theme: {
          ...current.theme,
          ...config?.theme,
        }
      })
  }
}

export default useConfirm
