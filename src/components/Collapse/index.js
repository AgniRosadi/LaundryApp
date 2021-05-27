import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper';
import Gap from '../Gap';
import { IconMinus, IconAdd, IconBaju, IconJas, IconCelana, IconKemeja } from '../../assets';
import { WARNA_ABU_ABU } from '../../utils/constant';


const Collapse = () => {
    return (
        <View style={styles.container}>
            <List.Accordion title="Satuan" id="1">
                <List.Item
                    left={props => <View style={styles.content}>
                        <List.Icon {...props} icon={IconBaju} style={styles.item} />
                        <View style={styles.page}>
                            <Text style={styles.text}>Kaos</Text>
                            <Text style={styles.harga}>Rp .10.000</Text>
                            <View style={styles.t}>
                                <TouchableOpacity><IconMinus /></TouchableOpacity>
                                <Gap width={5} />
                                <Text >0</Text>
                                <Gap width={5} />
                                <TouchableOpacity><IconAdd /></TouchableOpacity>
                            </View>
                        </View>
                    </View>} />
                <List.Item
                    left={props => <View style={styles.content}>
                        <List.Icon {...props} icon={IconKemeja} style={styles.item} />
                        <View style={styles.page}>
                            <Text style={styles.text}>Baju</Text>
                            <Text style={styles.harga}>Rp .10.000</Text>
                            <View style={styles.t}>
                                <TouchableOpacity><IconMinus /></TouchableOpacity>
                                <Gap width={5} />
                                <Text >0</Text>
                                <Gap width={5} />
                                <TouchableOpacity><IconAdd /></TouchableOpacity>
                            </View>
                        </View>
                    </View>} />
                <List.Item
                    left={props => <View style={styles.content}>
                        <List.Icon {...props} icon={IconCelana} style={styles.item} />
                        <View style={styles.page}>
                            <Text style={styles.text}>Celana</Text>
                            <Text style={styles.harga}>Rp .10.000</Text>
                            <View style={styles.t}>
                                <TouchableOpacity><IconMinus /></TouchableOpacity>
                                <Gap width={5} />
                                <Text >0</Text>
                                <Gap width={5} />
                                <TouchableOpacity><IconAdd /></TouchableOpacity>
                            </View>
                        </View>
                    </View>} />
                <List.Item
                    left={props => <View style={styles.content}>
                        <List.Icon {...props} icon={IconJas} style={styles.item} />
                        <View style={styles.page}>
                            <Text style={styles.text}>Kemeja</Text>
                            <Text style={styles.harga}>Rp .10.000</Text>
                            <View style={styles.t}>
                                <TouchableOpacity><IconMinus /></TouchableOpacity>
                                <Gap width={5} />
                                <Text >0</Text>
                                <Gap width={5} />
                                <TouchableOpacity><IconAdd /></TouchableOpacity>
                            </View>
                        </View>
                    </View>} />

            </List.Accordion>
        </View >
    )
}

export default Collapse;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    t: {
        marginLeft: windowHeight * 0.3,
        flexDirection: 'row',
        fontSize: 15,
        fontFamily: 'TitilliumWeb-SemiBold',
        marginTop: -windowHeight * 0.04,
    },
    content: {
        width: '95%',
        paddingBottom: 30
    },
    container: {
        backgroundColor: WARNA_ABU_ABU,
        borderRadius: 20,
        margin: 20,
    },
    text: {
        marginLeft: windowWidth * 0.02,
        fontSize: 16,
        fontFamily: 'TitilliumWeb-SemiBold',
    },
    item: {
        borderRadius: 20,
        backgroundColor: 'white',
    },
    page: {
        marginTop: -windowWidth * 0.11,
        paddingLeft: 50

    },
    harga: {
        marginLeft: windowWidth * 0.02,
        fontSize: 16,
        fontFamily: 'TitilliumWeb-Light',
    }
})
