import { Dispatch, SetStateAction } from 'react'

export interface Theme {
  spacing: number;
  primaryColor: string;
  backshadowColor: string;
}

// Optional configs with no defaults
interface Options {
  subtitle?: string;
  body?: string;

  // Supply a custom component for the buttons of the dialog, overrides defaults,
  // including the buttons actions, loading states, etc.
  actions?: (dismiss: VoidFunction) => JSX.Element | JSX.Element[];
}

export interface ConfirmConfig extends Options {
  title?: string;

  showCancel?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;

  // Callback for confirm action
  onConfirm?: VoidFunction;

  theme?: Partial<Theme>;
}

export interface CurrentConfirm extends Options {
  open: boolean;
  setCurrent:
  | Dispatch<SetStateAction<Omit<CurrentConfirm, 'setCurrent'>>>
  | undefined;

  title: string;

  showCancel: boolean;
  cancelLabel: string;
  confirmLabel: string;

  // Callback for confirm action
  onConfirm?: VoidFunction;

  theme: Theme;
}
