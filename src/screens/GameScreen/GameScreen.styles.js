import {StyleSheet} from 'react-native';
import Colors from './../../constants/colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
    containerbuttons: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    button: {
        flex: 1
    },
    icon: {
        fontSize: 25
    }
});

export default styles;
