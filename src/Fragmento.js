import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Fragmento() {
    return(
        <React.Fragment>
            <View  style={styles.view1}>
                <View style={styles.view5}>
                    <Text>Valor Inicial:</Text>
                </View> 

                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text>View2</Text>
                    </View> 
                    <View style={styles.view4}>
                        <Text>View3</Text>
                    </View>
                </View>    
            </View>                     
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:1,
        flexDirection: 'row',  
    },
    view2:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        flexDirection: 'row' , // sem nada a tela divide horizontal        
    },
    view3:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#5f9ea0',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
        
    },
    view4:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'darkslateblue',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view5:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'beige',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    text:{
        fontSize:32,
        color:'firebrick',
        fontWeight:'bold',
    }
})