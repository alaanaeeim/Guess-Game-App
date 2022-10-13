import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './NumberContainer.styles';


const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
             <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumberContainer;