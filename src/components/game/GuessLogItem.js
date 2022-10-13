import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <View style={styles.containerText}>
        <Text style={styles.itemTextNumber}>{roundNumber}</Text>
      </View>
      <Text style={[styles.itemText]}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  containerText: {
    backgroundColor: Colors.primary800,
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingTop: 3,
  },
  itemTextNumber: {
    color: Colors.accent500,
    textAlign: 'center',
    fontSize: 20,
  },
  itemText: {
    fontSize: 18,
    paddingTop: 4,
    fontWeight: '500',
  },
});
