import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Gap from '../Gap';
import { IconBaju, IconMinus, IconAdd, IconJaket, IconCelana, IconKemeja, IconJas } from '../../assets';

const Transaksi = ({ title, harga }) => {
    const Icon = () => {
        if (title === "Baju") return <IconBaju />

        if (title === "Kemeja") return <IconKemeja />

        if (title === "Celana") return <IconCelana />

        if (title === "Jaket") return <IconJaket />

        if (title === "Jas") return <IconJas />

        return <IconBaju />
    };
    return (
        <View style={styles.container}>
            <Icon />
            <View style={styles.page}>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.harga}>{harga}</Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity><IconMinus /></TouchableOpacity>
                <Gap width={5} />
                <Text style={styles.label}> 0 </Text>
                <Gap width={5} />
                <TouchableOpacity><IconAdd /></TouchableOpacity>
            </View>
        </View >
    )
}

export default Transaksi;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    list: {
        marginLeft: -windowHeight * 0.04,
        flexDirection: 'row',
        marginTop: 15
    },
    container: {
        backgroundColor: '#FFFFFF',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginTop: windowHeight * 0.03,
        flexDirection: 'row',
    },
    page: {
        marginLeft: windowWidth * 0.02,
        width: '70%'
    },
    label: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    harga: {
        fontSize: 15
    }
})
