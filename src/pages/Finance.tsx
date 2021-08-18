import React,{useState} from 'react';
import{SafeAreaView,StyleSheet, View,Text} from 'react-native';
import { Header } from '../components/Header';
import CheckBox from 'expo-checkbox'

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Finance(){
    const[isSelected1, setIsSelected1] = useState(false);
    const[isSelected2, setIsSelected2] = useState(false);
    const[isSelected3, setIsSelected3] = useState(false);
    
    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Finanças'}/>
            <View style={styles.ckeckContainer}>
                <Text style={styles.ckecktitler}>
                    Coloque seus objetivos mensais a serem alcaçados:
                </Text>
                <View style={styles.checkSection}>
                    <CheckBox
                        value={isSelected1}
                        style={styles.checkBox}
                        onValueChange={setIsSelected1}
                        color={colors.blue}
                    />
                    <Text style={styles.checkBoxTitle}>
                        Vender mais de 10 bombons
                    </Text>
                </View>

                <View style={styles.checkSection}>
                    <CheckBox
                        value={isSelected2}
                        style={styles.checkBox}
                        onValueChange={setIsSelected2}
                        color={colors.blue}
                    />
                    <Text style={styles.checkBoxTitle}>
                        Vender mais de 5 bolos
                    </Text>
                </View>

                <View style={styles.checkSection}>
                    <CheckBox
                        value={isSelected3}
                        style={styles.checkBox}
                        onValueChange={setIsSelected3}
                        color={colors.blue}
                    />
                    <Text style={styles.checkBoxTitle}>
                        Conseguir ao menos dois clientes fixos
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center'
    },ckeckContainer:{
        marginTop:30,
        flexDirection:'column',
        marginLeft:10
    },
    ckecktitler:{
        fontFamily:fonts.subtitle,
        fontSize:14
    },
    checkSection:{
        flexDirection:'row',
        marginTop:8
    },
    checkBox:{
        
    },
    checkBoxTitle:{
        marginTop:5,
        fontFamily:fonts.text
    },
});