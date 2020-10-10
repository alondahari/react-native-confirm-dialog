import defaults from './defaultConfigs'
import { createContext } from 'react'
import { CurrentConfirm } from './types'

export const ConfirmContext = createContext<CurrentConfirm>({
  ...defaults,
  setCurrent: undefined,
})
