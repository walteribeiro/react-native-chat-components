import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MessageBox} from "./lib";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <MessageBox type="text" text="Chat message example" />
      <MessageBox type="text" text="Chat message example" status="waiting" />
      <MessageBox type="text" text="Chat message example" status="sent" />
      <MessageBox type="text" text="Chat message example" status="received" />
      <MessageBox type="text" text="Chat message example" status="read" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
