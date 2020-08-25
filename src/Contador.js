import React,{useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'

export default function Contador (props) {

    let valorInicial = props.inicial
    const [numero, setNumero] = useState(props.inicial)
    function calcDobro(){
       setNumero(numero * 2)
    }

    return(
        <React.Fragment>
            <View  style={styles.view1}>
                <View style={styles.view5}>
                    <Text>Valor Inicial: {valorInicial} </Text>
                </View> 

                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Button title="CALCULAR DOBRO" onPress={calcDobro}/>
                    </View> 
                    <View style={styles.view4}>
                        <Text>Resposta: {numero}</Text>
                    </View>
                </View>    
            </View>                     
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:1,     
    },
    view2:{
        flexGrow:1,
        flexDirection: 'row' , 
    },
    view3:{
        flexGrow:1,
        backgroundColor: '#5f9ea0',
        alignItems: 'center', 
        justifyContent: 'center', 
        
    },
    view4:{
        flexGrow:1, 
        backgroundColor: 'darkslateblue',
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    view5:{
        flexGrow:1, 
        backgroundColor: 'beige',
        alignItems: 'center', 
        justifyContent: 'center',
    }
})
