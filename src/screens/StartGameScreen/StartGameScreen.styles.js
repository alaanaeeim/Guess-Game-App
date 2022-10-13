import {StyleSheet} from 'react-native';
import Colors from './../../constants/colors';

const styles = StyleSheet.create({
  rootscreen: {
    flex:1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 35,
    marginHorizontal: 14,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    elevation: 8,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    textAlign: 'center',
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    padding: 0
  },
});

export default styles;
