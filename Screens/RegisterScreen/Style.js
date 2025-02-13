import {StyleSheet} from "react-native";
import {horizontalScale, verticalScale} from "../../Assets/ScalingUtility/ScalingUtility";

const Style = StyleSheet.create({
    backButton: {
        marginTop: verticalScale(88),
        marginLeft: horizontalScale(28),
    },
    headerTextView: {
        marginTop: verticalScale(26.33),
        marginLeft: horizontalScale(28.1),
        marginRight: horizontalScale(70.63),
        marginBottom: verticalScale(20),
    },
    inputFieldContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    emailEditTextContainer: {
        marginHorizontal: horizontalScale(27),
        marginTop: verticalScale(15),
        marginBottom: verticalScale(10.8)
    },
    passwordEditTextContainer: {
        marginHorizontal: horizontalScale(27),
        marginBottom: verticalScale(10.8)
    },
    confirmPasswordEditTextContainer: {
        marginHorizontal: horizontalScale(27)
    },
    buttonContainer: {
        marginHorizontal: horizontalScale(27)
    },
    signUpMethodTextContainer: {
        marginTop: verticalScale(10)
    },
    signUpButtonContainer: {
        marginTop: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
    }

});

export default Style;
