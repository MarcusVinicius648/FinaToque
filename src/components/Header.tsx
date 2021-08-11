import React from 'react';
import { SafeAreaView, Text, View, StyleSheet,TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps extends TouchableOpacityProps{
    title: string
}

export function Header({title, ...rest}:HeaderProps){
    
    //Back to home´s page
    const navigation = useNavigation();
    function handleBackHome(){
        navigation.goBack();
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleBackHome}>
                <Entypo name={'chevron-left'} style={styles.icon} />
            </TouchableOpacity>
           
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        width:'100%',
        height: 85,
        marginBottom:0,
        borderBottomWidth:1,
        borderColor:colors.black,
        position:'relative',
        
    },

    icon:{
        fontSize:26,
        paddingLeft:10
    },
    title:{
        paddingLeft:17,
        paddingTop: 15,
        fontSize:24,
        fontFamily:fonts.heading,
        
    },
});