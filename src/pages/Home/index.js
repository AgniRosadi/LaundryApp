import React from 'react'
import { ImageBackground, StyleSheet, Dimensions, View, Image, Text, ScrollView } from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { BottonIcon, Pesanan, Promo, Saldo } from '../../components/'
import { WARNA_ABU_ABU } from '../../utils/constant';

const Home = () => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={ImageHeader} style={styles.header} >
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.hello}>
                        <Text style={styles.selamat}>Selamat Datang,</Text>
                        <Text style={styles.username}>Agni Rosadi</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami</Text>
                    <View style={styles.iconLayanan}>
                        <BottonIcon title="Kiloan" type="layanan" />
                        <BottonIcon title="Satuan" type="layanan" />
                        <BottonIcon title="Vip" type="layanan" />
                        <BottonIcon title="Karpet" type="layanan" />
                        <BottonIcon title="Setrika Saja" type="layanan" />
                        <BottonIcon title="Expres" type="layanan" />
                    </View>
                </View>
                <Promo />
                <View style={styles.pesanan}>
                    <Text style={styles.label}>Aktivitas Pesanan</Text>
                    <Pesanan title="pesanan No. 0001" status="Sudah Selesai" />
                    <Pesanan title="pesanan No. 0001" status="Masih Dicuci" />
                    <Pesanan title="pesanan No. 0001" status="Sudah Selesai" />
                    <Pesanan title="pesanan No. 0001" status="Sudah Selesai" />
                </View>
            </ScrollView>
        </View>
    )
}
//componen saldo didapatkan dari file saldo
export default Home
//dimensions berfungsi agar responsive, perhitungannya dengan rumus panjang asli dibagi panjang pixel
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.30,
        height: windowHeight * 0.06
    },
    hello: {
        marginTop: windowHeight * 0.03
    },
    selamat: {
        fontSize: 25,
        fontFamily: 'TitilliumWeb-Regular'
    },
    //titillum diambil dari file yang didownload dan disimpan di android/src/main/
    username: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 15
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap'

    },
    pesanan: {
        paddingHorizontal: 30,
        paddingTop: 5,
        backgroundColor: WARNA_ABU_ABU,
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: windowHeight * 0.03
    }
})
