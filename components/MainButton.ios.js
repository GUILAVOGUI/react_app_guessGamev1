import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>


    )


}


const styles = StyleSheet.create({

    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25

    },
    buttonText: {
        color: 'white',
        fontFamily: 'Courier-Bold',
        fontSize: 18

    }

});

export default MainButton;










