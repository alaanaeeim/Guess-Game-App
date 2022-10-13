import React from 'react';
import {View, Text} from 'react-native';
import styles from './title.styles';

const Title = ({children}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;
