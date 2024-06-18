import {Button, Image, ImageBackground, SafeAreaView, StatusBar, Text, View} from "react-native";
import GlobalStyle from "../../Assets/GlobalStyles/GlobalStyle";
import DeviceInfo from "react-native-device-info";
import BackButton from "../../Components/BackButton/BackButton.tsx";
import LoginSignUpButton from "../../Components/LoginSignUpButton/LoginSignUpButton.tsx";
import EditText from "../../Components/EditText/EditText.tsx";
import GoogleButton from "../../Components/GoogleButton/GoogleButton.tsx";
import GlobalImageBackgroundStyle from "../../Assets/GlobalStyles/GlobalImageBackgroundStyle";
const WelcomeScreen = () => {
    return (
        <SafeAreaView style={[GlobalStyle.globalBackgroundFlex,]}>
            <ImageBackground
                style={GlobalImageBackgroundStyle.imageBackground}
                resizeMode={'cover'}
                source={require('../../Assets/Images/GlobalAppAssets/img.png')}>

            </ImageBackground>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
