import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntradaDados from './src/Calculadora';
import Calc from './Aula04/CalculadoraClasse'

export default function App() {
  return (

      <View style={styles.container1}>
        <Text>Calculadora</Text>
        <Calc/>
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
