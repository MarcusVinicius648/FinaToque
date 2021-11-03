import React, {useState} from 'react';
import{SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity,Alert,KeyboardAvoidingView,Platform} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Buttom} from '../components/Buttom';
import  {useNavigation} from '@react-navigation/core';

export function DatasPage(){
    
    //Save the inputs datas
    const [saveName, setSaveName] = useState<string>();
    const [saveBusiness, setSaveBusiness] = useState<string>();
    const [saveEmail, setSaveEmail] = useState<string>();

    function nameSave(UserName: string){
        setSaveName(UserName)
    }
    function businessSave(UserBusiness: string){
        setSaveBusiness(UserBusiness)
    }
    function emailSave(UserEmail: string){
        setSaveEmail(UserEmail)
    }

    //Navigation to home´s page
    const navigation = useNavigation();

    async function handleNextPage(){
        if(!saveName || !saveBusiness || !saveEmail)
        return Alert.alert("Por favor, Preencha todos os campos!😢")
        
        await AsyncStorage.setItem('@finatoque:userName', saveName);
        await AsyncStorage.setItem('@finatoque:userBusiness',saveBusiness);
        await AsyncStorage.setItem('@finatoque:userEmail',saveEmail);
        navigation.navigate("Home")  
    }

    //change the inputs color and fix the container position
    const [name, setName] = useState(false);
    const [business, setBusiness] = useState(false);
    const [email, setEmail] = useState(false);
    const [container, setContainer] = useState(false);

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
       
             <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior={'position'} style={{width:'100%'}}>
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
                            onChangeText={nameSave}
                            maxLength={20}
                        />

                        <Text style={styles.label}>Nome do seu Negócio:</Text>
                        <TextInput
                            style={business ? styles.inputsActive : styles.inputs}
                            onFocus={handleColorBusiness}
                            onBlur={handleColorBusiness}
                            onChangeText={businessSave}
                            maxLength={20}
                        />

                        <Text style={styles.label}>E-mail:</Text>
                        <TextInput
                            style={email ? styles.inputsActive : styles.inputs}
                            onFocus={handleColorEmail}
                            onBlur={handleColorEmail}
                            onChangeText={emailSave}
                        />
                    </View>
                </KeyboardAvoidingView>

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
        marginTop: 50,
        marginLeft:20
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