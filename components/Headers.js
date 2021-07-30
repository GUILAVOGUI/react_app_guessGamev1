import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {

    return (
        <View style={{ ...styles.header, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
            <TitleText style={styles.headerText}>
                {props.title}
            </TitleText>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',


    },
    headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: 'white',


    },
    headerAndroid: {
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        backgroundColor: Colors.primary,

    },
    headerText: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'normal',
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }


});

export default Header;


