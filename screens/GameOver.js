import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText> Game Over !  </TitleText>

            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    // source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png' }}
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover"

                />

            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText} > Your phone needed {' '}
                    <Text style={styles.highlight} >
                        {props.roundsNumber} {' '}
                    </Text>
                    rounds to guess the number {' '}
                    <Text style={styles.highlight} >
                        {props.userNumber}
                    </Text>
                </BodyText>
            </View>


            <MainButton onPress={props.onRestart}>
                Play Again
            </MainButton>
        </View>
    )

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%',

    },
    highlight: {
        color: Colors.primary,

    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }

});

export default GameOverScreen;










