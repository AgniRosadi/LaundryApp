import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'
import { IconAktivitasPesanan } from '../../assets'
import { WARNA_ABU_ABU, WARNA_BERHASIL, WARNA_WARNING } from '../../utils/constant'

const Pesanan = ({ title, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconAktivitasPesanan />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default Pesanan;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        padding: 17,
        marginVertical: windowHeight * 0.02,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth * 0.02,
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold'
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? WARNA_BERHASIL : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU
    })
})
