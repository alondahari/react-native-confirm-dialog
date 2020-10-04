import React from 'react';
import { StyleSheet, View } from 'react-native';
import Triggers from './Triggers'
import ConfirmProvider from 'react-native-confirm-dialog/dist/ConfirmProvider'

export default function App() {
  return (
    <ConfirmProvider>
      <View style={styles.container}>
        <Triggers />
      </View>
    </ConfirmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
