import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconAddSaldo, IconGetVoc } from '../../assets';
import { WARNA_SEKUNDER } from '../../utils/constant';

const BottonIcon = ({ title }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconAddSaldo />

        if (title === "Get Voc") return <IconGetVoc />

        return <IconAddSaldo />
    };
    return (
        <TouchableOpacity>
            <View style={styles.icon}>
                <Icon />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BottonIcon;

const styles = StyleSheet.create({
    icon: {
        backgroundColor: WARNA_SEKUNDER,
        padding: 7,
        borderRadius: 10
    },
    text: {
        fontSize: 10,
        fontFamily: 'Titillium-Regular',
        textAlign: 'center'
    }
});
