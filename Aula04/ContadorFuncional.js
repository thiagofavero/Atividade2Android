import React,{useState} from 'react'
import {Text, Button, View} from 'react-native'

export default function Contador (props){
    const [numero, setNumero] = useState(props.inicial)
    function inc(){
       setNumero(numero + 1)
    }
    function dec(){
        setNumero(numero - 1)
    }
    return(
        <View>
            <Text>Valor inicial: {numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </View>
    );
}

