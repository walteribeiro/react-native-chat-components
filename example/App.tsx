import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatComponents from "react-native-chat-components";

export default function App() {
  const [result, setResult] = useState(0);

  useEffect(() => {
    ChatComponents.multiply(2, 6).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Result: {result}</Text>
    </View>
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
