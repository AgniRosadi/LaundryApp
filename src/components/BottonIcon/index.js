import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconAddSaldo, IconGetVoc, IconKiloan, IconBaju, IconKemeja, IconExpres, IconKarpet, IconSatuan, IconVip, IconSetrika } from '../../assets';
import { WARNA_SEKUNDER } from '../../utils/constant';

const BottonIcon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconAddSaldo />

        if (title === "Get Voc") return <IconGetVoc />

        if (title === "Kiloan") return <IconKiloan />

        if (title === "Satuan") return <IconSatuan />

        if (title === "Vip") return <IconVip />

        if (title === "Karpet") return <IconKarpet />

        if (title === "Setrika Saja") return <IconSetrika />

        if (title === "Expres") return <IconExpres />


    };
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.icon(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BottonIcon;

const styles = StyleSheet.create({
    container: (type) => ({
        marginButton: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 49 : 0,
        padding: type === "layanan" ? 2 : 0
    }),
    icon: (type) => ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        fontFamily: type === "layanan" ? 'Titillium-Light' : 'Titillium-Regular',
        textAlign: 'center'
    })
});
