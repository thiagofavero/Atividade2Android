import React from 'react'
import {Text} from 'react-native'

//Acessando propriedades
export default class Exemplo2 extends React.Component{
    
    render(){ // funcao chamada quando o componente precisar se renderizado      
        return(//This: acessa a propria classe
            <Text>
                Componente baseado em Classe! Parametro: 
                {this.props.valor}
            </Text>
        );
    } 
}

