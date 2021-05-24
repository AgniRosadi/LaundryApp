import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image, View, Dimensions } from 'react-native'
import { backgroundSplash, Logo } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            /*fungsi replace untuk menghindari tombol kembali pd device agar
             tidak kembali ke splash melainkan ke luar aplikasi, jika ingin fungsi
             kembali ke menu sebelumnya bisa menggunakan navigation*/
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundSplash} style={styles.background}>
                <Image source={Logo} style={styles.logo} />
            </ImageBackground>
        </View>
    )
}

export default Splash;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        //fungsi flex agar gambar menyesuaikan frem
        flex: 1,
        //fungsi dibawah untuk kontrol image agar rapih
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        width: windowWidth,
        height: windowHeight * 0.7,
        marginTop: windowHeight * 0.4
    },
    logo: {
        width: 300,
        height: 100,
        marginLeft: windowHeight * 0.12,
        marginTop: windowHeight * 0.1
    }
})
