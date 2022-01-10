import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/core';

import api from '../../server/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Produto {
    id: number,
    nome: string,
    valorVenda: number,
    valorCompra: number,
    quantidade: number
}

export function Stock() {
    const navigation = useNavigation();
    const [produto, setProduto] = useState<Produto[]>([])
    const [reload, setReload] = useState(true);

    useEffect(() => {
        navigation.addListener('focus', () => {
            setReload(!reload);
        });

        api.get('produtos').then(response => {
            setProduto(response.data)
        })
    }, [reload, navigation]);

    async function handleAddQuanty(id: number, nome: string, valorVenda: number, valorCompra: number, quantidade: number) {
        const produto = {
            nome,
            valorCompra,
            valorVenda,
            quantidade: quantidade + 1
        };
        await api.put(`produtos/${id}`, produto);
        setReload(!reload);
    }

    async function handleLessQuanty(id: number, nome: string, valorVenda: number, valorCompra: number, quantidade: number) {
        const produto = {
            nome,
            valorCompra,
            valorVenda,
            quantidade: quantidade - 1
        };

        await api.put(`produtos/${id}`, produto);
        setReload(!reload);
    }

    function handleAddItems(id: number) {
        navigation.navigate('AddItems', { produto_id: id });
    }

    function handleDeleteItems(id: number) {
        Alert.alert(
            "Confirmação",
            `Deseja realmente excluir este item?`,
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        api.delete(`produtos/${id}`);
                        setReload(!reload);
                        Alert.alert("Item excluído com sucesso!")
                    }
                },
                {
                    text: "Não",
                    onPress: () => { },
                }
            ]
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Estoque'} />

            <ScrollView>
                {produto.map(produtos => (
                    <View
                        style={styles.itemsContainer}
                        key={produtos.id}
                    >
                        <Text style={styles.itemsTitle}>
                            {produtos.nome}
                        </Text>

                        <View style={styles.iconsContainer}>
                            <TouchableOpacity
                                onPress={() => handleAddItems(produtos.id)}
                                style={styles.Editablecontainer}
                            >
                                <Entypo name={'new-message'} style={styles.itemsEdit} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleDeleteItems(produtos.id)}
                                style={styles.Editablecontainer}
                            >
                                <Entypo name={'trash'} style={styles.itemsEdit} />
                            </TouchableOpacity>
                        </View>

                        <Entypo name={'vinyl'} style={styles.itemsPriceSymbol} />
                        <Text style={styles.itemsPrice}>
                            Preço: R$ {produtos.valorVenda}
                        </Text>

                        <View style={styles.itemsQuantContainer}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => handleLessQuanty(produtos.id, produtos.nome, produtos.valorVenda, produtos.valorCompra, produtos.quantidade)}
                            >
                                <View style={styles.itemsQuantContainerMinus}>
                                    <Entypo name={'minus'} style={styles.itemsQuantMinus} />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.itemsQuantContainerNumber}>
                                <Text style={styles.itemsQuant}> {produtos.quantidade} </Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => handleAddQuanty(produtos.id, produtos.nome, produtos.valorVenda, produtos.valorCompra, produtos.quantidade)}
                            >
                                <View style={styles.itemsQuantContainerPlus}>
                                    <Entypo name={'plus'} style={styles.itemsQuantPlus} />
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                ))}

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleAddItems(0)}
                >
                    <View style={styles.containerButtom}>
                        <Text style={styles.textButtom} >
                            Adicionar Item +
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        alignItems: 'center',
        flex: 1
    },

    itemsContainer: {
        width: 350,
        height: 100,
        borderWidth: 0.3,
        borderColor: colors.gray,
        marginTop: 30,
        borderRadius: 12
    },
    itemsTitle: {
        padding: 10,
        fontSize: 18,
        fontFamily: fonts.heading,
        color: colors.black
    },
    iconsContainer: {
        width: 90,
        marginRight: 15,
        marginTop: -37.8,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    Editablecontainer: {
        width: 30,
        marginLeft: 10,
        alignSelf: 'flex-end',
    },
    itemsEdit: {
        alignSelf: 'flex-end',
        fontSize: 20,
    },
    itemsPriceSymbol: {
        margin: 10,
        marginTop: 47,
        fontSize: 14,
        color: colors.pink
    },
    itemsPrice: {
        marginLeft: 30,
        marginTop: -26,
        fontSize: 12,
        fontFamily: fonts.subtitle,
        color: colors.gray
    },
    itemsQuantContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: 200,
        marginTop: -47,
        marginRight: 10,
        justifyContent: 'space-around',
    },
    itemsQuantContainerMinus: {
        width: 40,
        height: 40,
        backgroundColor: colors.pink,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsQuantMinus: {
        fontSize: 18
    },
    itemsQuantContainerNumber: {
        width: 40,
        height: 40,
        backgroundColor: colors.gray,
        opacity: 0.3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsQuant: {
        fontSize: 20,
        color: colors.black,
        opacity: 1,
        fontFamily: fonts.heading,
        paddingTop: 7
    },
    itemsQuantContainerPlus: {
        width: 40,
        height: 40,
        backgroundColor: colors.dark_pink,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsQuantPlus: {
        fontSize: 18,
    },
    containerButtom: {
        backgroundColor: colors.pink,
        width: 340,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 20
    },
    textButtom: {
        color: colors.background,
        fontFamily: fonts.heading,
        fontSize: 17
    },

});