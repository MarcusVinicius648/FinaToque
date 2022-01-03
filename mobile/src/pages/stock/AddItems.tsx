import React,{useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet,TextInput, Text, TouchableOpacity, View, Alert} from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/core';
import api from '../../../server/api';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function AddItems(){
    const[nome, setNome] = useState<String>('');
    const[valueC, setValueC] = useState<String>('');
    const[valueV, setValueV] = useState<String>('');
    const[quantity, setQuantity] = useState<Number>();
    const navigation = useNavigation();
    
    async function handleAddItems(){
        
        const valorCompra = Number(valueC);
        const valorVenda =  Number(valueV);
        const quantidade = quantity;

        const data = {
            nome,
            valorCompra,
            valorVenda,
            quantidade,
        };
        
        await api.post('produtos', data);

        Alert.alert('Item registrado!')
        navigation.goBack();
    }

    function handleSetName(itemName:string){
        setNome(itemName);
    }
    function handleSetValueC(itemValueC:string){
        setValueC(itemValueC)
    }
    function handleSetValueV(itemValueV:string){
        setValueV(itemValueV)
    }
    function handleSetQnt(itemQuant:string){
        const qnt = Number(itemQuant);
        setQuantity(qnt)
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
                            onChangeText={handleSetName}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Valor de Custo'}
                            placeholderTextColor={colors.black}
                            keyboardType={'number-pad'}
                            onChangeText={handleSetValueC}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Valor de Venda'}
                            placeholderTextColor={colors.black}
                            keyboardType={'number-pad'}
                            onChangeText={handleSetValueV}
                        />
                        <TextInput 
                            style={styles.inputs}
                            placeholder={'Quantidade'}
                            placeholderTextColor={colors.black}
                            keyboardType={'number-pad'}
                            onChangeText={handleSetQnt}
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