import React from 'react';
import {
    View, StyleSheet, Text, Button, Image, Dimensions
    , ScrollView

} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';



const GameOverScreen = props => {
    return (

        <ScrollView>

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
        </ScrollView>




    )

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    image: {
        width: '100%',
        height: '100%',

    },
    highlight: {
        color: Colors.primary,

    },
    resultContainer: {
        marginHorizontal: 30,
        // marginVertical: Dimensions.get('window').height / 90
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }

});

export default GameOverScreen;










