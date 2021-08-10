import React from 'react';
import{SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Entypo } from '@expo/vector-icons';
import { Header } from '../components/Header';

export function Stock(){
    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Estoque'}/>

            <ScrollView style={styles.scrollContainer} contentContainerStyle={{paddingBottom: 200}}>
                <View  style={styles.itemsContainer}>
                    <Text style={styles.itemsTitle}>
                        Fruit Mix Salad
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
                        Fruit Mix Salad
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
                        Fruit Mix Salad
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
                        Fruit Mix Salad
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
                        Fruit Mix Salad
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
});