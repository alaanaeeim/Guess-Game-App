import React, {useEffect, useState} from 'react';
import { View, Text, Alert } from 'react-native';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Title from '../../components/title/title';
import styles from './GameScreen.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const generationRandomNumberBetween = (min, max, exclude) => {
  const rdNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(rdNumber, exclude);

  if (rdNumber === exclude) {
    console.log('Generated number is equal to exclude number');
    return generationRandomNumberBetween(min, max, exclude);
  } else {
    console.log('Generated number is not equal to exclude number');
    return rdNumber;
  }

}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generationRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {

    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know this is wrong ....", [{text: 'Sorry', style: 'cancel'}]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generationRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher Or Lower?</Text>
        <View style={styles.containerbuttons}>
          <View style={styles.button}>
           <PrimaryButton onPress= {() => nextGuessHandler('lower')}>
             <Icon name="remove" style={styles.icon} />
           </PrimaryButton>
          </View>
         <View style={styles.button}>
           <PrimaryButton onPress= {() => nextGuessHandler('greater')}>
            <Icon name="add" style={styles.icon} />
           </PrimaryButton>
         </View>
        </View>
      </View>

      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;
