React Native Confirm Dialog
=======================================

Fully customizable, plug-and-play confirmation and alert dialogs for your
react-native / expo app.

* * *

### Features

*   Get going fast with basic styling and sensible defaults.
*   Action buttons with loading states.
*   Theme-able.
*   Dissmisable on outside clicks. 

### Usage

* Wrap your application in `<ConfirmProvider>`
* Use anywhere with `useConfirm()` hook

### Demo

[Try it out on Expo snack](#) 

### Basic Demo

```tsx
import React from 'react';
import { Button } from 'react-native'
import { ConfirmProvider, useConfirm } from 'react-native-confirm-dialog'

const ConfirmableButton = () => {
  const confirm = useConfirm()
  const handlePress = () => {
    confirm({
      // ...config options
    })
  }
  
  return <Button onPress={ handlePress } title='Confirm this!' />
}

export default function App() {

  return (
    <ConfirmProvider>
        <ConfirmableButton />
    </ConfirmProvider>
  );
}

```

Check out the `example` folder for a full example.

### Download & Installation

```shell 
$ yarn add react-native-confirm-dialog
```

### Configuration Options

All of the configurations are optional with sensible defaults, and can be overriden
when calling `confirm` or provided to `ConfirmProvider` as a `config` prop. Configuration
options provided when calling `confirm` take precedence over options provided to `ConfirmProvider`

| Name                    | Description                                         | Type                                                        | Default               |
|-------------------------|-----------------------------------------------------|-------------------------------------------------------------|-----------------------|
| actions                 | Override the dialog buttons with a custom component | (dismiss: VoidFunction) => JSX.Element &#124; JSX.Element[] | `undefined`           |
| body                    | Description of the confirmation                     | String                                                      | `undefined`           |
| bodyStyle               | Style overrides for dialog body                     | TextStyle                                                   | `undefined`           |
| buttonLabelStyle        | Style overrides for both button labels              | TextStyle                                                   | `undefined`           |
| buttonStyle             | Style overrides for both buttons                    | ViewStyle                                                   | `undefined`           |
| cancelLabel             | Text of the secondary button                        | String                                                      | "Cancel"              |
| cancelButtonLabelStyle  | Style overrides for secondary button label          | TextStyle                                                   | `undefined`           |
| cancelButtonStyle       | Style overrides for secondary button                | ViewStyle                                                   | `undefined`           |
| confirmButtonLabelStyle | Style overrides for primary button label            | TextStyle                                                   | `undefined`           |
| confirmButtonStyle      | Style overrides for primary button                  | ViewStyle                                                   | `undefined`           |
| confirmLabel            | Text of the primary button                          | String                                                      | "OK"                  |
| dismissOnOutsideClick   | Should the dialog be dismissed on an outside click? | Boolean                                                     | `true`                |
| onConfirm               | Callback action for primary button                  | VoidFunction                                                | `() => {}`            |
| showCancel              | Set to default to hide the secondary button         | Boolean                                                     | `true`                |
| subtitle                | Dimmed text right below the title                   | String                                                      | `undefined`           |
| subtitleStyle           | Style overrides for subtitle                        | TextStyle                                                   | `undefined`           |
| theme                   | Theme overrides                                     | Object                                                      | [see Theme section](#theme) |
| title                   | The title displayed in the confirm dialog           | String                                                      | "Are you sure?"       |
| titleStyle              | Style overrides for title                           | TextStyle                                                   | `undefined`           |

#### Theme

Control dialog look with a theme. Theme can be passed the same way as all the props above.

| Name            | Description                        | Type   | Default                |
|-----------------|------------------------------------|--------|------------------------|
| spacing         | Spacing between elements base unit | number | 8                      |
| primaryColor    | Color of primary elements          | string | "rgba(0, 0, 255, 0.5)" |
| backshadowColor | Color of dialog's backdrop         | string | "rgba(0, 0, 0, 0.4)"   |


### Contributing

Keep it simple. Keep it minimal. Add tests.

### License

This project is licensed under the MIT License
