import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { IconBack } from '../../assets'
import { Transaksi, ListLayanan, Voucher, Pembayaran } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constant'

const Pesanan = () => {
    return (
        <View style={styles.utama}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <TouchableOpacity style={styles.container}>
                        <IconBack />
                    </TouchableOpacity>
                    <Text style={styles.text}>Pesanan Anda</Text>
                </View>

                <View style={styles.layanan}>
                    <ScrollView horizontal>
                        <View style={styles.iconLayanan}>
                            <ListLayanan title="Satuan" />
                            <ListLayanan title="Kiloan" />
                            <ListLayanan title="Vip" />
                            <ListLayanan title="Expres" />
                            <ListLayanan title="Setrika Aja" />
                            <ListLayanan title="Karpet" />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.transaksi}>
                    <Transaksi title="Baju" harga="Rp. 1000" />
                    <Transaksi title="Kemeja" harga="Rp. 1000" />
                    <Transaksi title="Celana" harga="Rp. 1000" />
                    <Transaksi title="Jaket" harga="Rp. 1000" />
                    <Transaksi title="Jas" harga="Rp. 1000" />
                </View>
                <View style={styles.pesanan}>
                    <Text style={styles.label}>Pembayaran</Text>
                    <Voucher />
                    <Pembayaran />
                </View>

            </ScrollView>
        </View>
    )
}

export default Pesanan;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    utama: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginLeft: windowHeight * 0.03,
        width: windowHeight * 0.05,
        backgroundColor: '#FFFFFF',
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
        alignItems: 'center',
        flexDirection: 'row',

    },
    page: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '64%',
    },
    text: {
        paddingTop: windowHeight * 0.03,
        fontSize: 25,
        fontFamily: 'TitilliumWeb-Bold',
    },

    layanan: {
        paddingLeft: windowHeight * 0.02,
    },
    iconLayanan: {
        flexDirection: 'row',
        marginTop: 1,
    },
    transaksi: {
        marginBottom: 30
    },
    pesanan: {
        paddingHorizontal: 30,
        paddingTop: 2,
        backgroundColor: WARNA_ABU_ABU,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    label: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold',
    },
})
