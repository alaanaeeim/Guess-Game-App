import React, {useState} from 'react';
import {View, TextInput, Alert, Text} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import styles from './StartGameScreen.styles';
import Title from './../../components/title/title';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (enteredText) => {
      setEnteredValue(enteredText);
  }

  const resetInputHandler = () => {
    setEnteredValue('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
        Alert.alert(
            'Invalid number!', 
            'Number has to be between 1 and 99.', 
            [{text: 'Okay', style: 'destructive', 
            onPress: resetInputHandler}]
            );
        return;
    } 
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootscreen}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter A Number</Text>
      <TextInput
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        style={styles.numberInput}
        value={enteredValue}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
  );
};

export default StartGameScreen;
