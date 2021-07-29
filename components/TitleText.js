import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';


const TitleText = props => <Text style={{ ...styles.title, ...props.style }}>
    {props.children}
</Text>

const styles = StyleSheet.create({

    title: {
        fontFamily: (Platform.OS === 'ios') ? 'Zapfino' : 'Roboto',
        fontWeight: 'bold',
        fontSize: 27,
    }

});

export default TitleText;










