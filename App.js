import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './src/screens/StartGameScreen/StartGameScreen';
import GameScreen from './src/screens/GameScreen/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen/GameOverScreen';
import Colors from './src/constants/colors';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gnameIsOver, setGnameIsOver] = useState(true);


  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGnameIsOver(false);
  };

  const gameOverHandler = () => {
    setGnameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} />;
  }

  if(gnameIsOver && userNumber) {
    screen = <GameOverScreen onPickNumber={pickedNumberHandler} />;
  }


  return (
    <LinearGradient colors={[Colors.primary600, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});

export default App;
