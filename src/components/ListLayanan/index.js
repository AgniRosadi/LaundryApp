import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'

const ListLayanan = ({ title }) => {
    return (
        <View style={styles.page}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListLayanan;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        padding: 10,
        alignItems: 'center',
        marginVertical: windowHeight * 0.01,
        margin: 7,
    },
    page: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold',
    }
})
