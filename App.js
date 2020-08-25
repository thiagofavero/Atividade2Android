import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntradaDados from './src/Calculadora'

export default function App() {
  return (

      <View style={styles.container1}>
        <EntradaDados/>
      </View>
 
  );
}

const styles = StyleSheet.create({
  container1: {
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40
  },
});
