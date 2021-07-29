import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const BodyText = props => <Text style={{ ...styles.body, ...props.style }}>
    {props.children}
</Text>

const styles = StyleSheet.create({

    body: {
        fontFamily: 'Thonburi-Bold',
        fontWeight: 'bold',
        fontSize: 19
    }

});

export default BodyText;

// Thonburi - Bold
// Courier - Bold








