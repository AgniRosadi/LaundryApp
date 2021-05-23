import React from 'react'
import { ImageBackground, StyleSheet, Dimensions, View, Image, Text } from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { Saldo } from '../../components/'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header} >
                <Image source={Logo} style={styles.logo} />
                <View style={styles.hello}>
                    <Text style={styles.selamat}>Selamat Datang,</Text>
                    <Text style={styles.username}>Agni Rosadi</Text>
                </View>
            </ImageBackground>
            <Saldo />
            <Text style={styles.text}>Layanan Kami</Text>
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
        flex: 1
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
    text: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold',
        marginLeft: 10,
        marginTop: windowHeight * 0.02

    }
})
