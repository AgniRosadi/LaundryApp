import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image } from 'react-native'
import { backgroundSplash, Logo } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            /*fungsi replace untuk menghindari tombol kembali pd device agar
             tidak kembali ke splash melainkan ke luar aplikasi, jika ingin fungsi
             kembali ke menu sebelumnya bisa menggunakan navigation*/
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground source={backgroundSplash} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({

    background: {
        //fungsi flex agar gambar menyesuaikan frem
        flex: 1,
        //fungsi dibawah untuk kontrol image agar rapih
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 105
    }
})
