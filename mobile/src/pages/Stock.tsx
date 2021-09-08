import React from 'react';
import{SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Entypo } from '@expo/vector-icons';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/core';

export function Stock(){
    const navigation =useNavigation();

    function handleAddItems(){
        navigation.navigate('AddItems');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Estoque'}/>

            <ScrollView style={styles.scrollContainer} >
                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Bombom
                    </Text>
                    <Entypo name={'new-message'} style={styles.itemsEdit}/>
                    <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                    <Text style={styles.itemsPrice}>
                        Preço: R$ 10,00
                    </Text>
                    <View style={styles.itemsQuantContainer}>
                        <View style={styles.itemsQuantContainerMinus}>
                            <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                        </View>
                        <View style={styles.itemsQuantContainerNumber}>
                            <Text style={styles.itemsQuant}> 1 </Text>
                        </View>
                        <View style={styles.itemsQuantContainerPlus}>
                            <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                        </View>
                    </View>
                </View>

                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Bolo de Pote
                    </Text>
                    <Entypo name={'new-message'} style={styles.itemsEdit}/>
                    <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                    <Text style={styles.itemsPrice}>
                        Preço: R$ 10,00
                    </Text>
                    <View style={styles.itemsQuantContainer}>
                        <View style={styles.itemsQuantContainerMinus}>
                            <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                        </View>
                        <View style={styles.itemsQuantContainerNumber}>
                            <Text style={styles.itemsQuant}> 1 </Text>
                        </View>
                        <View style={styles.itemsQuantContainerPlus}>
                            <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                        </View>
                    </View>
                </View>

                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Pavê
                    </Text>
                    <Entypo name={'new-message'} style={styles.itemsEdit}/>
                    <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                    <Text style={styles.itemsPrice}>
                        Preço: R$ 10,00
                    </Text>
                    <View style={styles.itemsQuantContainer}>
                        <View style={styles.itemsQuantContainerMinus}>
                            <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                        </View>
                        <View style={styles.itemsQuantContainerNumber}>
                            <Text style={styles.itemsQuant}> 1 </Text>
                        </View>
                        <View style={styles.itemsQuantContainerPlus}>
                            <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                        </View>
                    </View>
                </View>

                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Salada de fruta
                    </Text>
                    <Entypo name={'new-message'} style={styles.itemsEdit}/>
                    <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                    <Text style={styles.itemsPrice}>
                        Preço: R$ 10,00
                    </Text>
                    <View style={styles.itemsQuantContainer}>
                        <View style={styles.itemsQuantContainerMinus}>
                            <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                        </View>
                        <View style={styles.itemsQuantContainerNumber}>
                            <Text style={styles.itemsQuant}> 1 </Text>
                        </View>
                        <View style={styles.itemsQuantContainerPlus}>
                            <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                        </View>
                    </View>
                </View>

                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Pão
                    </Text>
                    <Entypo name={'new-message'} style={styles.itemsEdit}/>
                    <Entypo name={'vinyl'} style={styles.itemsPriceSymbol}/>
                    <Text style={styles.itemsPrice}>
                        Preço: R$ 10,00
                    </Text>
                    <View style={styles.itemsQuantContainer}>
                        <View style={styles.itemsQuantContainerMinus}>
                            <Entypo name={'minus'} style={styles.itemsQuantMinus}/>
                        </View>
                        <View style={styles.itemsQuantContainerNumber}>
                            <Text style={styles.itemsQuant}> 1 </Text>
                        </View>
                        <View style={styles.itemsQuantContainerPlus}>
                            <Entypo name={'plus'} style={styles.itemsQuantPlus}/>
                        </View>
                    </View>
                </View>
           

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
        alignItems:'center'
    },
    scrollContainer:{
        marginTop: -10,
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
        marginTop:40
    },
    textButtom: {
       color: colors.background,
       fontFamily:fonts.heading,
       fontSize:17
    },
    
});