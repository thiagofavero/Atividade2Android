import React,{Component} from 'react'
import {Text} from 'react-native'

export default class Exemplo1 extends React.Component{
    render(){ // funcao chamada quando o componente precisar se renderizado
        return(
            <Text style={[{fontSize:24}]}>Componente baseado em Classe!</Text>
        )
    } 
}

// export default class Exemplo1 extends Component{
//     render(){ // funcao chamada quando o componente precisar se renderizado
//         return(
//             <Text style={[{fontSize:24}]}>Componente baseado em Classe!</Text>
//         )
//     } 
// }

