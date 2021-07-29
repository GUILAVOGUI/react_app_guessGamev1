import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'


import Header from './components/Headers';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';


const fetchFonts = () => {
  Font.loadAsyn({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);







  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGameHandler} />
  }

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }
  return (

    <View style={styles.screen} >

      <Header title="Gues a Number " />
      {content}
    </View>





  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
});
