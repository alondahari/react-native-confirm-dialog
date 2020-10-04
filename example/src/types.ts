import { Dispatch, SetStateAction } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

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

  // Buttons styling override
  buttonStyle?: ViewStyle;
  buttonLabelStyle?: TextStyle;

  // Specific styling for the confirm button
  confirmButtonStyle?: ViewStyle;
  confirmButtonLabelStyle?: TextStyle;

  // Specific styling for the cancel button
  cancelButtonStyle?: ViewStyle;
  cancelButtonLabelStyle?: TextStyle;

  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  bodyStyle?: TextStyle;
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
  onConfirm: VoidFunction;

  theme: Theme;
}
