import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Load } from '../../components/Load';

import api from '../../../server/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Params {
    produto_id: number
}

interface Produtos {
    nome:string;
    valorCompra:string;
    valorVenda:string;
    quantidade:string;
}

export function AddItems() {
    const [produtos, setProdutos] = useState<Produtos>({} as Produtos)
    const [nome, setNome] = useState<String>('');
    const [valueC, setValueC] = useState<String>('');
    const [valueV, setValueV] = useState<String>('');
    const [quantity, setQuantity] = useState<String>('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params

    useEffect(() => {
        if (routeParams.produto_id > 0) {
            api.get(`produtos/${routeParams.produto_id}`).then((response) => {
                setProdutos(response.data);
                setNome(produtos.nome);
                setValueC(produtos.valorCompra)
                setValueV(produtos.valorVenda)
                setQuantity(produtos.quantidade)
            })
        }
    }, [])

    async function handleAddItems() {
        const valorCompra = Number(valueC);
        const valorVenda = Number(valueV);
        const quantidade = Number(quantity);
        const data = {
            nome,
            valorCompra,
            valorVenda,
            quantidade,
        };

        setLoading(true);
        if (routeParams.produto_id == 0) {
            await api.post('produtos', data);
            setLoading(false);
            Alert.alert('Item registrado!')
        } else {
            await api.put(`produtos/${routeParams.produto_id}`, data);
            setLoading(false);
            Alert.alert('Item Atualizado!')
        }
        navigation.goBack();
    }

    function handleSetName(itemName: string) {
        setNome(itemName);
    }
    function handleSetValueC(itemValueC: string) {
        setValueC(itemValueC)
    }
    function handleSetValueV(itemValueV: string) {
        setValueV(itemValueV)
    }
    function handleSetQnt(itemQuant: string) {
        setQuantity(itemQuant)
    }

    if (loading)
        return <Load />

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Criar um Item'} />
            <KeyboardAvoidingView behavior='position'>
                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Nome do Produto'}
                        placeholderTextColor={colors.black}
                        onChangeText={handleSetName}
                        defaultValue={String(nome)}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Valor de Custo'}
                        placeholderTextColor={colors.black}
                        keyboardType={'number-pad'}
                        onChangeText={handleSetValueC}
                        defaultValue={String(valueC)}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Valor de Venda'}
                        placeholderTextColor={colors.black}
                        keyboardType={'number-pad'}
                        onChangeText={handleSetValueV}
                        defaultValue={String(valueV)}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Quantidade'}
                        placeholderTextColor={colors.black}
                        keyboardType={'number-pad'}
                        onChangeText={handleSetQnt}
                        defaultValue={String(quantity)}
                    />
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity activeOpacity={0.7} onPress={handleAddItems}>
                <View style={styles.containerButtom}>
                    <Text style={styles.textButtom} >
                        Salvar!
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        alignItems: 'center'
    },
    inputsContainer: {
        marginTop: 50,
    },
    inputs: {
        backgroundColor: colors.background,
        width: 343,
        height: 60,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 20,
        paddingLeft: 20,
        fontFamily: fonts.text,
        marginBottom: 15
    },
    containerButtom: {
        backgroundColor: colors.pink,
        width: 340,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40
    },
    textButtom: {
        color: colors.background,
        fontFamily: fonts.heading,
        fontSize: 22
    },
});