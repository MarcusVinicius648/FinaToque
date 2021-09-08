import React from 'react';
import {SafeAreaView,StyleSheet,View, Text, TouchableOpacity} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Entypo } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/core';

export function Welcome(){

    const navigation = useNavigation();

    function handleNextPage(){
        navigation.navigate('DatasPage')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Fina<Text style={styles.fina}>Toque</Text>
                </Text>
            </View>

            <View style={styles.containerSubtitle}>
                <Text style={styles.subtitle}>
                    Bem-vindos!{'\n'}
                    Este é o seu administrador inteligente!
                </Text>
            </View>

            <View style={styles.buttonPosicion}>
            <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleNextPage}
                >
                    <Entypo 
                        name="chevron-thin-right" 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    )
};

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
        height: 300,
        backgroundColor:colors.yellow,
    },
    title:{
        paddingTop: 220,
        fontFamily:fonts.heading,
        fontSize: 40,
    },
    fina:{
        color:colors.background
    },

    //Subtitle
    containerSubtitle:{
        marginTop: 40,
        alignItems:'center',
    },
    subtitle:{
        fontSize: 20,
        fontFamily:fonts.subtitle,
        alignItems:'center',
        textAlign:'center',
        lineHeight:30,
    },

    //Button
    buttonPosicion:{
        marginTop:50,

    },
    button:{
        backgroundColor:colors.black,
        width:66,
        height:66,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
    },
    buttonIcon:{
        color:colors.background
    },

});