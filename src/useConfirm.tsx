import {
  ConfirmConfig,
  CurrentConfirm,
} from 'types'
import { ConfirmContext } from 'ConfirmProvider'
import { useContext } from 'react'

type ConfirmHook = (config: ConfirmConfig) => void

const useConfirm = (): ConfirmHook => {
  const { setCurrent, ...current } = useContext<CurrentConfirm>(ConfirmContext)

  return (config: ConfirmConfig): void => {
    setCurrent &&
      setCurrent({
        ...current,
        open: true,
        ...config,
      })
  }
}

export default useConfirm
