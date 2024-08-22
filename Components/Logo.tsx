import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import Svg, {Circle, Rect} from 'react-native-svg'
import { LogoStyles } from "../style/style";

const Logo = () => {

    return (
        <View style={LogoStyles.logoStyle}>
            <Svg style={LogoStyles.iconStyle} width="50" height="50" viewBox="0 0 50 50" fill="none">
                <Circle cx="8.14982" cy="14.2178" r="7.63505" fill="#D9D9D9"/>
                <Circle cx="19.2889" cy="8.55225" r="7.63505" fill="#D9D9D9"/>
                <Circle cx="32.7614" cy="42.1703" r="7.63505" fill="#D9D9D9"/>
                <Circle cx="41.8101" cy="34.5353" r="7.63505" fill="#D9D9D9"/>
                <Rect x="11.6538" y="14.3906" width="9.16234" height="31.2041" transform="rotate(-39.5845 11.6538 14.3906)" fill="#D9D9D9"/>
            </Svg>
            <Text style={LogoStyles.textStyle}>NAZWA</Text>
        </View>
    )
}

export default Logo