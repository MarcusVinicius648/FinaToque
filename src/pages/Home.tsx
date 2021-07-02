import React from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

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

    },
});