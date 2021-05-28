import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import { Profile } from '../../assets/images'
import { List, Avatar } from 'react-native-paper';
import { IconAddSaldo, IconAkun, IconGetVoc } from '../../assets/icons';
import Gap from '../../components/Gap';
import { WARNA_UTAMA } from '../../utils/constant';
import { color } from 'react-native-reanimated';

const Akun = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageMarker}>
                <View style={styles.page}>
                    <Avatar.Image size={120} source={Profile} />
                    <Text View style={styles.title}>Agni Rosadi</Text>
                </View>
                <View View style={styles.text}>
                    <IconAddSaldo />
                    <View style={styles.value}>
                        <Text View style={styles.saldo}>Saldo</Text>
                        <Text View style={styles.saldo}>Rp. 1.000.000</Text>
                    </View>
                    <Gap width={30} />
                    <IconGetVoc />
                    <View style={styles.value}>
                        <Text View style={styles.saldo}>Voucher </Text>
                        <Text View style={styles.saldo}>1 Voucher</Text>
                    </View>
                </View>
            </View>
            <List.Item
                title="Pengguna"
                description="Agni Rosadi"
                left={props => <List.Icon {...props} icon={IconAkun} color="#2296F3" />}
            />
            <List.Item
                title="E-mail"
                description="agnirosadi0@gmail.com"
                left={props => <List.Icon {...props} icon="email" color="#C8C8C8" />}
            />
            <List.Item
                title="Versi App"
                description="v.001"
                left={props => <List.Icon {...props} icon="folder" color="#C8C8C8" />}
            />

        </View >
    )
}

export default Akun;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imageMarker: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        backgroundColor: WARNA_UTAMA,
        elevation: 5,
    },
    saldo: {
        fontSize: 15,
        fontFamily: 'Titillium-Light'
    },
    value: {
        marginLeft: 40
    },
    title: {
        marginTop: 7,
        marginLeft: 5,
        fontSize: 25,
        fontFamily: 'Titillium-Bold'
    },
    text: {
        marginTop: -windowHeight * 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    page: {
        marginVertical: windowHeight * 0.1,
        marginLeft: windowHeight * 0.2
    }
})
