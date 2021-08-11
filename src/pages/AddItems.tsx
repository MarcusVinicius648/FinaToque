import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet,TextInput, Text, TouchableOpacity, View} from 'react-native';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
export function AddItems(){
    const navigation = useNavigation();
    function handleAddItems(){
        navigation.goBack();
    }
    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Criar um Item'}/>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.inputsContainer}>
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Nome do Produto'}
                            placeholderTextColor={colors.black}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Valor de Compra'}
                            placeholderTextColor={colors.black}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Valor de Venda'}
                            placeholderTextColor={colors.black}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Quantidade'}
                            placeholderTextColor={colors.black}
                            keyboardType={'number-pad'}
                        />
                    </View>
                </KeyboardAvoidingView>

                <TouchableOpacity activeOpacity={0.7} onPress={handleAddItems}>
                    <View  style={styles.containerButtom }>
                        <Text style={styles.textButtom} >
                            Criar!
                        </Text>
                    </View>  
                </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center'
    },
    inputsContainer:{
        marginTop:50,
    },
    inputs:{
        backgroundColor: colors.background,
        width: 343,
        height: 60,
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:20,
        paddingLeft:20,
        fontFamily:fonts.text,
        marginBottom:15
    },
    containerButtom: {
        backgroundColor:colors.pink,
        width: 340,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:40
    },
    textButtom: {
       color: colors.background,
       fontFamily:fonts.heading,
       fontSize:22
    },
});