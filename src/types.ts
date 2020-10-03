import { Dispatch, SetStateAction } from 'react'

export interface ConfirmConfig {
  title: string;
  subtitle?: string;
  body?: string;
  showCancel?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  buttons?: JSX.Element[];
  onConfirm?: VoidFunction;
  actions?: (dismiss: VoidFunction) => JSX.Element | JSX.Element[];
}

export interface CurrentConfirm extends ConfirmConfig {
  open: boolean;
  setCurrent:
  | Dispatch<SetStateAction<Omit<CurrentConfirm, 'setCurrent'>>>
  | undefined;
}
