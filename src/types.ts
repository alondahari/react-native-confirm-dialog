import { Dispatch, SetStateAction } from 'react'

export interface ConfirmConfig {
  title?: string;
  subtitle?: string;
  body?: string;

  showCancel?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;

  // Callback for confirm action
  onConfirm?: VoidFunction;

  // Supply a custom component for the buttons of the dialog, overrides defaults,
  // including the buttons actions, loading states, etc.
  actions?: (dismiss: VoidFunction) => JSX.Element | JSX.Element[];
}

export interface CurrentConfirm extends ConfirmConfig {
  open: boolean;
  setCurrent:
  | Dispatch<SetStateAction<Omit<CurrentConfirm, 'setCurrent'>>>
  | undefined;
}
