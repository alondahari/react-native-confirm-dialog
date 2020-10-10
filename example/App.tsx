import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Triggers from './Triggers'
import { ConfirmProvider } from './src'

export default function App() {
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (!feedback) return
    setTimeout(() => {
      setFeedback('')
    }, 2000)
  }, [feedback])

  return (
    <View style={styles.container}>
      <View>
        <Text>Basic</Text>
        <ConfirmProvider>
            <Triggers setFeedback={setFeedback} />
        </ConfirmProvider>
      </View>
      <View>
        <Text>Global configurations override (green primary color)</Text>
        <ConfirmProvider config={{ theme: { primaryColor: 'rgba(0, 200, 0, 0.5)' } }}>
            <Triggers setFeedback={setFeedback} />
        </ConfirmProvider>
      </View>
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  feedback: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  }
});
