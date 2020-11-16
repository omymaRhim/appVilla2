import React from 'react';
import { NavigationActions } from 'react-navigation';


//Import all required component
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Reservationdone = props => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF50',
                justifyContent: 'center',
            }}>
            <Text style={styles.successTextStyle}>Customer added successfully!.</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() =>

                    props.navigation.navigate('ReservationScreen')
                    //props.navigation.goBack(null)
                    //props.navigation.dispatch(NavigationActions.back())



                }>
                <Text style={styles.buttonTextStyle}>Add +</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        //borderRadius: 30,
        borderColor: 'black',
    },
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#000000',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        //borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#000000',
        paddingVertical: 10,
        fontSize: 16,

    },
    successTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
});
export default Reservationdone;