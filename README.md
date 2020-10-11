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
import { ConfirmProvider } from 'react-native-confirm-dialog'

export default function App() {
  const confirm = useConfirm()
  const handlePress = () => {
    confirm({
      // ...config options
    })
  }

  return (
    <ConfirmProvider>
        <Button onPress={ handlePress } title='Confirm this!' />
    </ConfirmProvider>
  );
}

```

### Download & Installation

```shell 
$ yarn add react-native-confirm-dialog
```

### Contributing

Keep it simple. Keep it minimal. Add tests.

### License

This project is licensed under the MIT License
