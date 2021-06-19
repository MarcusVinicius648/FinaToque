import React from 'react';
import{SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Buttom} from '../components/Buttom';

export function DatasPage(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Fina<Text style={styles.fina}>Toque</Text>
                </Text>
            </View>

            <View style={styles.inputsContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.inputs}
                />

                <Text style={styles.label}>Nome do seu Negócio:</Text>
                <TextInput
                    style={styles.inputs}
                />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    style={styles.inputs}
                />
            </View>

            <View style={styles.buttonPosicion}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Buttom title={'Entrar'}/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center'
    },

    //Header
    header:{
        top:0,
        width:'100%',
        alignItems:'center',
        height: 160,
        backgroundColor:colors.yellow,
    },
    title:{
        paddingTop: 80,
        fontFamily:fonts.heading,
        fontSize: 40,
    },
    fina:{
        color:colors.background
    },

    //Inputs
    inputsContainer:{
        marginTop: 40,

    },
    label:{
        marginBottom:10,

        fontSize:14,
        fontFamily:fonts.text,
        color:colors.black
    },
    inputs:{
        width:300,
        marginBottom:25,

        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:10,
        //Shadow
    },

    //Buttom
    buttonPosicion:{
        marginTop: 20
    },
});