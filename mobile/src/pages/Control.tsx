import React,{useState} from 'react';
import{SafeAreaView,StyleSheet, View, TouchableOpacity, Text, TextInput} from 'react-native';
import { Header } from '../components/Header';
import {Feather as Icon} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';

export function Control(){
    const[selectedQuant, setSelectedQuant] = useState();
    const[date, setDate] = useState(new Date(Date.now()));
    const[show, setShow] = useState(false);

    const onChange = (event : Event, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header title={'Controle Diário'}/>
            <View style={styles.calendarPosition}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>setShow(true)}>
                    <Icon
                        name={'calendar'}
                        size={30}
                        color={colors.green}
                    />
                </TouchableOpacity>
                <Text style={styles.calendarText}>
                    {((date.getDate() )) + "/" + ((date.getMonth() + 1)) +  "/" + date.getFullYear( )}
                </Text>
            </View>
            {show &&(
                <DateTimePicker
                    testID = 'datetimepicker'
                    value= {date}
                    mode= 'date'
                    is24Hour= {true}
                    display = {'default'}
                    onChange= {onChange}
                />
            )}

            <View style={styles.shopContainer}>
                <Text style={styles.textShop}> 
                    Selecione o item que você deseja vender: 
                </Text>
                <View style={styles.inputsShopContainer}>
                    <TextInput 
                        style={styles.inputShop}
                        placeholder={'Item'}
                    />
                    <View style={styles.pickerShop}>
                        <Picker
                            selectedValue={selectedQuant}
                            onValueChange={(itemValue, itemIdex)=> setSelectedQuant(itemValue)} 
                            style={styles.pickerTextShop}  
                        >
                            <Picker.Item 
                                label='1'
                                value='1'
                            />
                            <Picker.Item 
                                label='2'
                                value='2'
                            />
                            <Picker.Item 
                                label='3'
                                value= '3'
                            />
                        </Picker>
                    </View>
                    
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.7}>
                <View  style={styles.containerButtom }>
                    <Text style={styles.textButtom} >
                        Vender
                    </Text>
                </View>  
            </TouchableOpacity>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:0,
        alignItems:'center'
    },
    calendarPosition:{
        alignContent:'center',
        flexDirection:'row',
        marginTop: 50
    },
    calendarText:{
        fontFamily: fonts.heading,
        fontSize:20,
        marginLeft:10
    },
    shopContainer:{
        marginTop: 20,
    },
    inputsShopContainer:{
        flexDirection:'row'
    },
    inputShop:{
        borderBottomWidth:1,
        borderColor: colors.green,
        width: 220,
        fontFamily: fonts.text,
        fontSize: 14,
        textAlign:'center',
        marginTop: 20
    },
    textShop:{
        fontFamily: fonts.subtitle,
        fontSize:15
    },
    pickerShop:{
        marginLeft: 20,
        borderBottomWidth:1,
        borderBottomColor:colors.green,
        width:50,
    },
    pickerTextShop:{
        fontSize:14,
        color:colors.gray,
        fontFamily: fonts.text,
    },
    containerButtom: {
        backgroundColor:colors.green,
        width: 340,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:70
    },
    textButtom: {
       color: colors.background,
       fontFamily:fonts.heading,
       fontSize:17
    },

});