import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import estilo from './Estilo'

export default props => {
    return(
        <View style={styles.view1}>
           <Text style={estilo.textHeader}> Numero inicial: { props.valor1}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'white',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    }
})














// estava no meu 
// import React from 'react'
// import {Text, View} from 'react-native'
// import estilo from './Estilo'

// //Por convensao, chamamos o parametro de props 
// // export default function Parametro (props) {
// //     console.warn(props)
// //     return(
// //         <View style={estilo.viewStyle}>
// //             <Text> Valores recebidos por parametro: { props.valor1}</Text>
// //             <Text>O dobro de { props.valor1} eh: { props.valor1 * 2}</Text>
// //             <Text> Valores recebidos por parametro: { props.valor2}</Text>
// //             <Text> O dobro de { props.valor2} eh: { props.valor2 * 2}</Text>
// //         </View>
// //     );
// // }

// export default props => {
//     console.warn(props)
//     return(
//         <View style={estilo.viewStyle}>
//             <Text> Valores recebidos por parametro: { props.valor1}</Text>
//             <Text>O dobro de { props.valor1} eh: { props.valor1 * 2}</Text>
//             <Text> Valores recebidos por parametro: { props.valor2}</Text>
//             <Text> O dobro de { props.valor2} eh: { props.valor2 * 2}</Text>
//         </View>
//     );
// }