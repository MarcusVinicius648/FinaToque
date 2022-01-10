import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, View } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Buttom({ title, ...rest }: ButtonProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} {...rest}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        width: 340,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,

    },

    text: {
        color: colors.background,
        fontFamily: fonts.heading,
        fontSize: 17
    },
});