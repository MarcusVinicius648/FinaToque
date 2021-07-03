import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,TouchableOpacity} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';

export function Home(){
    
    const navigation = useNavigation();

    function handleUpdateDatas(){
        navigation.navigate('DatasPage')
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.topContainer}>
                    <Entypo name={'location-pin'} style={styles.inconEntypo}/>
                    <Text style={styles.finatoque}>
                        FinaToque
                    </Text>
                </View>   
            </View>

            <View style={styles.lowContainer}>
                <Text style={styles.businessName}>
                    Nome do Comércio
                </Text>
                <Text style={styles.ownerName}>
                    Bem vindo, Nome do Proprietário!
                </Text>
            </View>

            <View style={styles.mainContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxControl}>
                        <Text style={styles.boxTitle}>
                            Controle
                        </Text>
                        <Entypo name={'chevron-with-circle-right'} style={styles.boxIcon}/>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxFinance}>
                        <Text style={styles.boxTitle}>
                            Finanças
                        </Text>
                        <Entypo name={'chevron-with-circle-right'} style={styles.boxIcon}/>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.boxStock}>
                        <Text style={styles.boxTitle}>
                            Estoque
                        </Text>
                        <Entypo name={'chevron-with-circle-right'} style={styles.boxIcon}/>
                    </View>
                </TouchableOpacity>
               
            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttom} 
                    activeOpacity={0.7}
                    onPress={handleUpdateDatas}
                >
                        <Text style={styles.footerText}>
                            + Atualizar Dados
                        </Text>
                </TouchableOpacity>   
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center',
    },

    //Header
    header:{
        width: '100%',
        alignItems:'center',
    },

    topContainer:{
        marginTop:25,
        flexDirection:'row'
    },

    inconEntypo:{
        marginRight:6,
        marginTop:-3,
        color:colors.yellow,
        fontSize:25
    },

    finatoque:{
        fontSize:15,
        fontFamily:fonts.heading,
    },

    lowContainer:{
        marginTop: 40,
        width: '100%',
        borderBottomWidth:1,
        paddingLeft: 35,
    },

    businessName:{
        fontFamily:fonts.heading,
        fontSize:24
    },

    ownerName:{
        fontFamily:fonts.heading,
        fontSize:16,
        marginBottom:10
    },

    //Main - Ways
    mainContainer:{
        flexDirection:'row',
        marginTop:60,
        width:'100%',
        justifyContent:'space-around'
    },

    boxControl:{
        width:95,
        height:170,
        borderRadius:20,
        alignItems:'center',
        paddingTop:40,
        backgroundColor:colors.green
    },

    boxFinance:{
        width:95,
        height:170,
        borderRadius:20,
        alignItems:'center',
        paddingTop:40,
        backgroundColor:colors.blue
    },

    boxStock:{
        width:95,
        height:170,
        borderRadius:20,
        alignItems:'center',
        paddingTop:40,
        backgroundColor:colors.pink
    },

    boxTitle:{
        fontSize:16,
        fontFamily:fonts.heading,
        marginBottom:40
    },

    boxIcon:{
        fontSize:26
    },

    //Footer
    footer:{
        marginVertical:100,
        width:350,
        alignItems:'center',
        
    },

    buttom:{
        height:66,
        backgroundColor:colors.yellow,
        width:'100%',
        alignItems:'center',
        paddingTop:26,
        borderRadius:20
    },

    footerText:{
        fontSize:14,
        fontFamily:fonts.subtitle
    },
});