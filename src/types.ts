import { Dispatch, SetStateAction } from 'react'
import { TextStyle, ViewStyle } from 'react-native'

export interface Theme {
  backshadowColor: string;
  primaryColor: string;
  spacing: number;
}

// Optional configs with no defaults
interface Options {
  // Supply a custom component for the buttons of the dialog, overrides defaults,
  // including the buttons actions, loading states, etc.
  actions?: (dismiss: VoidFunction) => JSX.Element | JSX.Element[];

  body?: string;
  bodyStyle?: TextStyle;

  // Buttons styling override
  buttonStyle?: ViewStyle;
  buttonLabelStyle?: TextStyle;

  // Specific styling for the cancel button
  cancelButtonStyle?: ViewStyle;
  cancelButtonLabelStyle?: TextStyle;

  // Specific styling for the confirm button
  confirmButtonStyle?: ViewStyle;
  confirmButtonLabelStyle?: TextStyle;

  subtitle?: string;
  subtitleStyle?: TextStyle;

  titleStyle?: TextStyle;
}

export interface ConfirmConfig extends Options {
  Button?: JSX.Element;

  cancelLabel?: string;
  confirmLabel?: string;

  dismissOnOutsideClick?: boolean;

  // Callback for confirm action
  onConfirm?: VoidFunction;

  showCancel?: boolean;

  theme?: Partial<Theme>;

  title?: string;
}

export interface CurrentConfirm extends Options {
  cancelLabel: string;
  confirmLabel: string;

  dismissOnOutsideClick: boolean;

  // Callback for confirm action
  onConfirm: VoidFunction;
  open: boolean;

  setCurrent:
  | Dispatch<SetStateAction<Omit<CurrentConfirm, 'setCurrent'>>>
  | undefined;

  showCancel: boolean;

  theme: Theme;

  title: string;
}
