import React, {useState} from 'react';
import{SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Buttom} from '../components/Buttom';
import  {useNavigation} from '@react-navigation/core';

export function DatasPage(){
    
    const navigation = useNavigation();
    

    const [name, setName] = useState(false);
    const [business, setBusiness] = useState(false);
    const [email, setEmail] = useState(false);
    const [container, setContainer] = useState(false);

    function handleNextPage(){
        console.log('cu')
        navigation.navigate("Home")  
    }


    function handleColorName(){
        setName(!name)
        setContainer(!container)
    }
   
    function handleColorBusiness(){
        setBusiness(!business)
        setContainer(!container)  
       
    }
    function handleColorEmail(){
        setEmail(!email)
        setContainer(!container)
       
    }

    return(
        <SafeAreaView style={container ? styles.containerBusinessEmail : styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Fina<Text style={styles.fina}>Toque</Text>
                </Text>
            </View>

            <View style={styles.inputsContainer}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={name ? styles.inputsActive : styles.inputs}
                    onFocus={handleColorName}
                    onBlur={handleColorName}
                />

                <Text style={styles.label}>Nome do seu Negócio:</Text>
                <TextInput
                    style={business ? styles.inputsActive : styles.inputs}
                    onFocus={handleColorBusiness}
                    onBlur={handleColorBusiness}
                />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                     style={email ? styles.inputsActive : styles.inputs}
                     onFocus={handleColorEmail}
                     onBlur={handleColorEmail}
                />
            </View>

                <View style={styles.buttonPosicion} >
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        onPress={handleNextPage}
                        >

                        <Buttom title={'Entrar'}/>
                    </TouchableOpacity>
                </View>
                
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center',
        
    },
    containerBusinessEmail:{
        margin:0,
        alignItems:'center',
        bottom: 150
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
        textAlign:'center',

        borderWidth:1,
        fontFamily:fonts.subtitle,
        color: colors.black,
        borderColor:colors.gray,
        borderRadius:10,
        //Shadow
    },
    inputsActive:{
        width:300,
        marginBottom:25,
        textAlign:'center',

        borderWidth:1,
        fontFamily:fonts.subtitle,
        color: colors.black,
        borderColor:colors.yellow,
        borderRadius:10,
        //Shadow
    },

    //Buttom
    buttonPosicion:{
        marginTop: 20
    },
});