import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Iklan } from '../../assets'
import { WARNA_PREMIER } from '../../utils/constant';

const Promo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasi}>
                <Text style={styles.label}>Voucher Gratis,</Text>
                <Text style={styles.info}>Untuk 5x Pencucian</Text>
            </View>
            <View style={styles.logo}>
                <Image source={Iklan} style={styles.iklan} />
            </View>
        </View>
    )
}

export default Promo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: WARNA_PREMIER,
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
    },

    text: {
        justifyContent: 'space-between',
    },

    informasi: {
        width: '70%',
    },
    label: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold',
    },
    info: {
        fontSize: 15,
        fontFamily: 'TitilliumWeb-Regular',
    },
    iklan: {
        width: windowWidth * 0.2,
        height: windowHeight * 0.08,
        marginTop: -windowHeight * 0.02
    },
    logo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
