import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    buttonOutercontainer: {
        overflow: 'hidden',
        borderRadius: 28,
        margin: 4,
    },

    buttonInnercontainer: {
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation:5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
    }
})

export default styles;