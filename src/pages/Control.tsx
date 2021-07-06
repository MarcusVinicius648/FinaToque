import React from 'react';
import{SafeAreaView,StyleSheet, View} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header';

export function Control(){
    return(
        <SafeAreaView style={styles.container}>
                <Header title={'Controle Diário'}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center'
    },

});