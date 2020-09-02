import React, {Component} from 'react'
import {Text, TextInput} from 'react-native'

export default class Exemplo2 extends Component{
    state = {
        numero: this.props.valor,
        text: this.props.texto
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numero:props.valor
    //     }
    // }

    alterarValor(num){
        this.setState({numero:num})
    }

    render(){ 
        return(
            <>
                <Text>Componente baseado em Classe! Parametro: {this.state.numero}</Text>
                <TextInput
                    placeholder="Valor" 
                    value={this.state.numero} 
                    onChangeText={this.alterarValor} 
                />
            </>
        );
    } 
}

