import React from "react";
import { StyleProp, View, ViewComponent, ViewStyle } from "react-native";
import { Ellipse, Rect, Svg } from "react-native-svg";

const TelephoneIcon = (props: {style?:StyleProp<ViewStyle>}) => {
    return (
        <View style={props.style}>
            <Svg width="141" height="141" viewBox="0 0 141 141" fill="none">
                <Rect x="0.11731" y="0.634918" width="140" height="140" rx="14" fill="#B44646"/>
                <Ellipse cx="102.499" cy="35.7323" rx="23.8186" ry="23.2289" fill="#D9D9D9"/>
                <Ellipse cx="46.2988" cy="109.582" rx="23.8186" ry="23.2289" fill="#D9D9D9"/>
                <Rect x="85.7114" y="19.3205" width="26.9964" height="93.0104" transform="rotate(37.4399 85.7114 19.3205)" fill="#D9D9D9"/>
                <Ellipse cx="104.117" cy="37.664" rx="20.7243" ry="19.8204" fill="#C1C1C1"/>
                <Ellipse cx="47.4328" cy="109.582" rx="20.7243" ry="19.8204" fill="#C1C1C1"/>
            </Svg>
        </View>

    )
}

export default TelephoneIcon