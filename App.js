import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { stylesRow, stylesColumn } from './styles';


export default function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] =useState(0)

  const num1 = Number(number1)
  const num2 = Number(number2)

  const plus = () => {
    setResult(num1 + num2);
  }

  const minus = () => {
    setResult(num1 - num2);
  }

  return (
    <View style={stylesColumn.container}>
      <Text>Result: {result}</Text>
      <TextInput 
        placeholder='Number 1'
        inputMode='numeric'
        value={number1}
        onChangeText={number1 => setNumber1(number1)}
      />
      <TextInput 
        placeholder='Number 2'
        inputMode='numeric'
        value={number2}
        onChangeText={number2 => setNumber2(number2)}
      />
      <View style={stylesRow.container}>
        <Button 
          onPress={plus} 
          title='+' 
        />
        <Button 
          onPress={minus}
          title='-' 
        />
      </View>
    </View>
    
  );
}
