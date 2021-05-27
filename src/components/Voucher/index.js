import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { IconGetVoc } from '../../assets'

const Voucher = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconGetVoc />
            <View style={styles.text}>
                <Text style={styles.title}>Gunakan Voucher</Text>
            </View>
        </TouchableOpacity >
    )
}

export default Voucher;

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
        padding: 10,
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
})
