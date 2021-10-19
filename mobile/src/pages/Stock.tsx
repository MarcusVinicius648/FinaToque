import React,{useState,useEffect} from 'react';
import{SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import api from '../../server/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Entypo } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/core';

interface Produto{
    id:number,
    nome:string,
    valorVenda:number,
    quantidade:number
}

export function Stock(){
    const navigation =useNavigation();
    const [produtos, setProdutos] = useState<Produto[]>([])

    function handleAddItems(){
        navigation.navigate('AddItems');
    }
    useEffect(() =>{
        api.get('produto').then(response=>{
            setProdutos(response.data)
        })
    },[]);


    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Estoque'}/>

            <ScrollView>
                {produtos.map(produto=>(
                    <View  
                        style={styles.itemsContainer}
                        key={produto.id}
                    >
                        <Text style={styles.itemsTitle}>
                            {produto.nome}
                        </Text>
                        <Entypo name={'new-message'} style={styles.itemsEdit}/>
                        <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                        <Text style={styles.itemsPrice}>
                            Preço: R$ {produto.valorVenda}
                        </Text>
                        <View style={styles.itemsQuantContainer}>
                            <View style={styles.itemsQuantContainerMinus}>
                                <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                            </View>
                            <View style={styles.itemsQuantContainerNumber}>
                                <Text style={styles.itemsQuant}> {produto.quantidade} </Text>
                            </View>
                            <View style={styles.itemsQuantContainerPlus}>
                                <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                            </View>
                        </View>
                    </View>
                ))}

            <TouchableOpacity activeOpacity={0.7} onPress={handleAddItems}>
                <View  style={styles.containerButtom }>
                    <Text style={styles.textButtom} >
                        Adicionar Item +
                    </Text>
                </View>  
            </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center',
        flex:1
    },
    
    itemsContainer:{
        width: 350,
        height: 100,
        borderWidth: 0.3,
        borderColor:colors.gray,
        marginTop:30,   
        borderRadius:12
    },
    itemsTitle:{
        padding:10,
        fontSize:18,
        fontFamily:fonts.heading,
        color:colors.black
    },
    itemsEdit:{
        alignSelf:'flex-end',
        marginRight: 15,
        fontSize:20,
        marginTop: -37.8
    },
    itemsPriceSymbol:{
        margin:10,
        marginTop:47,
        fontSize:14,
        color:colors.pink
    },
    itemsPrice:{
        marginLeft: 30,
        marginTop: -26,
        fontSize:12,
        fontFamily:fonts.subtitle,
        color: colors.gray
    },
    itemsQuantContainer:{
        alignItems:'flex-end',
        flexDirection:'row',
        marginLeft: 200,
        marginTop: -47,
        marginRight:10,
        justifyContent:'space-around',
    },
    itemsQuantContainerMinus:{
        width:40,
        height:40,
        backgroundColor:colors.pink,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    itemsQuantMinus:{
        fontSize:18
    },
    itemsQuantContainerNumber:{
        width:40,
        height:40,
        backgroundColor:colors.gray,
        opacity:0.3,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    itemsQuant:{
        fontSize:20,
        color:colors.black,
        opacity:1,
        fontFamily:fonts.heading,
        paddingTop: 7
    },
    itemsQuantContainerPlus:{
        width:40,
        height:40,
        backgroundColor:colors.dark_pink,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    itemsQuantPlus:{
        fontSize:18,
    },
    containerButtom: {
        backgroundColor:colors.pink,
        width: 340,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:40,
        marginBottom:20
    },
    textButtom: {
       color: colors.background,
       fontFamily:fonts.heading,
       fontSize:17
    },
    
});