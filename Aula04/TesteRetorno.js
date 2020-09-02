import React, {useState} from 'react'
import {Text} from 'react-native'
import Comp from './ComponenteParametroRetorno'

export default function Teste (){
    const [resultado, setValor] = useState(0)

    function retorno(valor){
        setValor(valor)
    }

    return(
        <>
            <Comp valor1={20} valor2={50} retorno={retorno}/>
            <Text>Resultado da soma:{resultado}</Text>
        </>
    );
}

