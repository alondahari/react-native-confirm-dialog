import { View } from 'react-native'
import React, { useState } from 'react'
import EnhancedButton from './src/EnhancedButton'

interface Props {
  onCompleted: VoidFunction;
  dismiss: VoidFunction;
}

const styles = {
  label: {
    fontSize: 16,
    fontWeight: 'bold' as const,
  },
  topButton: {
    marginBottom: 12
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notNow: {
    borderColor: 'black',
    flex: 2,
  },
  dontAsk: {
    flex: 4,
    backgroundColor: 'transparent',
  },
  dontAskLabel: {
    color: 'black',
  },
  blackLabel: {
    color: 'black',
  },
}

const CustomActions = ({
  dismiss,
  onCompleted,
}: Props): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const handleAgreed = (): void => {
    setLoading(true)
    setTimeout(() => {
      onCompleted()
      setLoading(false)
      dismiss()
    }, 1000)
  }

  return (
    <>
      <EnhancedButton
        loading={ loading }
        style={ styles.topButton }
        labelStyle={ styles.label }
        onPress={ handleAgreed }
      >
          Sign Me Up!
      </EnhancedButton>
      <View style={ styles.bottomButtons }>
        <EnhancedButton
          inverse
          onPress={ dismiss }
          style={ styles.notNow }
        >
            Not now
        </EnhancedButton>
        <EnhancedButton
          style={ styles.dontAsk }
          labelStyle={ styles.dontAskLabel }
          onPress={ dismiss }
        >
          Don't ask me again
        </EnhancedButton>
      </View>
    </>
  )
}

export default CustomActions
