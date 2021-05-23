import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { BottomIcon } from '..';
import { WARNA_UTAMA } from '../../utils/constant';
import Gap from '../Gap';

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo :</Text>
                    <Text style={styles.valueSaldo}>Rp. 100.000</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelVoc}>Coupon Anda :</Text>
                    <Text style={styles.valueVoc}>1 Coupon</Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                <BottomIcon title="Add Saldo" />
                <Gap width={5} />
                <BottomIcon title="Get Voc" />
            </View>
        </View>
    );
};
//fungsi Gap untuk mengakali margin antar dua komponen ditambah style buttonaksi
export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 17,
        marginHorizontal: 40,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
        marginTop: -windowHeight * 0.05,
        flexDirection: 'row',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    informasiSaldo: {
        width: '60%',
    },
    labelSaldo: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Regular',
    },
    valueSaldo: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold',
    },
    labelVoc: {
        fontSize: 12,
        fontFamily: 'TitilliumWeb-Regular',
    },
    valueVoc: {
        fontSize: 12,
        fontFamily: 'TitilliumWeb-Bold',
        color: WARNA_UTAMA,
    },
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
});
