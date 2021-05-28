import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { IconLine } from '../../assets/icons'
import { WARNA_ABU_ABU, WARNA_BERHASIL } from '../../utils/constant'

const Pemabayaran = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rincian Pembayaran</Text>
            <View style={styles.text}>
                <Text style={styles.list}>Total Cucian :</Text>
                <Text style={styles.harga}>1</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.list}>Total Harga :</Text>
                <Text style={styles.harga}>Rp. 90.000</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.list}>Potongan Harga :</Text>
                <Text style={styles.harga}>Rp. 10.000</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.list}>Biaya Pengiriman :</Text>
                <Text style={styles.harga}>Rp. 5.000</Text>
            </View>
            <IconLine style={styles.margin} />
            <View style={styles.text}>
                <Text style={styles.harga}>Total Pembayaran :</Text>
                <Text style={styles.harga}>Rp. 80.000</Text>
            </View>
            <TouchableOpacity style={styles.bayar} onPress={() =>
                // Alert with postive negative button
                Alert.alert(
                    'Terimkasih',
                    'Silahkan lakukan pembayaran sebelum jam 10.34 am',
                    [
                        { text: 'Tutup', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                )
            } >
                <Text style={styles.tekan}>Bayar Sekarang</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Pemabayaran;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    bayar: {
        backgroundColor: WARNA_BERHASIL,
        borderRadius: 10,
        padding: 10,
        marginVertical: windowHeight * 0.01,
    },
    tekan: {
        textAlign: 'center',
        fontFamily: 'TitilliumWeb-Bold',
        color: 'white',
        fontSize: 15
    },
    margin: {
        marginLeft: -windowHeight * 0.01,
        alignContent: 'center',
        margin: 15
    },
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        padding: 10,
        marginVertical: windowHeight * 0.02,
    },
    text: {
        marginLeft: windowWidth * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        margin: 6,
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    list: {
        fontSize: 16,
        fontFamily: 'TitilliumWeb-Light'
    },
    harga: {
        fontSize: 16,
        fontFamily: 'TitilliumWeb-SemiBold'
    }
})
