import React,{useState} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'

export default props => {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState('')
    let num1
    let num2
    
    function Int(){
        num1 = parseInt(numero1)
        num2 = parseInt(numero2)
    }

    function Somar(){
        Int()
        setResultado(num1 + num2)
    }
    function Subtrair(){
        Int()
        setResultado(num1 - num2)
    }
    function Multiplicar(){
        Int()
        setResultado(num1 * num2)
    }
    function Dividir(){
        Int()
        if(!num2  == 0){
            setResultado(num1 / num2)
        }
        else{
            setResultado("IMPOSSIVEL DIVIDIR POR ZERO")
        }
    }


    return (
        <View>
            <Text style={styles.text}>Iforme os numeros:</Text>
            <TextInput
                placeholder="Primeiro numero"
                value={numero1}
                onChangeText={numero1 => setNumero1(numero1)}
            />
            <TextInput
                placeholder="Segundo numero"
                value={numero2}
                onChangeText={numero2 => setNumero2(numero2)}
            />
            <Text>Resposta = {resultado}</Text>
            <Button color="red" title="Somar" onPress={(Somar)}/>
            <Button color="green" title="Subtrair" onPress={(Subtrair)}/>
            <Button color="blue" title="Multiplicar" onPress={(Multiplicar)}/>
            <Button color="orange" title="Dividir" onPress={(Dividir)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
    }
})