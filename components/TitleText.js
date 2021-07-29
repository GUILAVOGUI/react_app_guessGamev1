import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const TitleText = props => <Text style={{ ...styles.title, ...props.style }}>
    {props.children}
</Text>

const styles = StyleSheet.create({

    title: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 27,
    }

});

export default TitleText;










