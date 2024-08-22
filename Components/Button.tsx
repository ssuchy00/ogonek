import React from "react";
import { GestureResponderEvent, StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "react-native";

const Button = (props: {style?: StyleProp<ViewStyle>, textStyle?: StyleProp<TextStyle>, text: string, onPress?:()=>void}) => {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button;