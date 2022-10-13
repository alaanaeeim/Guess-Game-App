import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './PrimaryButton.styles';

const PrimaryButton = ({children, onPress}) => {

  return (
    <View style={styles.buttonOutercontainer}>
      <Pressable 
        style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer} 
        onPress={onPress} 
        android_ripple={{color: '#644202'}}
        >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
