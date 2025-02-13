import {Image, View} from "react-native";
import GlobalStyle from "../../Assets/GlobalStyles/GlobalStyle";

const FacebookButton = () => {
    return (
        <View
            style={GlobalStyle.globalAppLogoContainer}>
            <Image
                source={require('../../Assets/Images/facebook_logo_24px.png')}/>
        </View>
    );
};

export default FacebookButton;
