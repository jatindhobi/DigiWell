import {Text} from "react-native";
import PropTypes from "prop-types";
import Style from "./Style";

interface HeaderTextProps {
    text: string,
}

const HeaderText = (props: HeaderTextProps) => {
    return (
        <Text
            style={Style.headerTextStyle}>
            {props.text}
        </Text>
    );
};

HeaderText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HeaderText;
