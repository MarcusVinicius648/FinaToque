import React from 'react';
import{SafeAreaView,StyleSheet} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header';

export function Stock(){
    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Estoque'}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{

    },
});