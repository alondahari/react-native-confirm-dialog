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

Check out the `example` folder for a full example

### Download & Installation

```shell 
$ yarn add react-native-confirm-dialog
```

### Contributing

Keep it simple. Keep it minimal. Add tests.

### License

This project is licensed under the MIT License
