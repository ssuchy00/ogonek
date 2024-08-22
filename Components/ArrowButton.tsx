import React from "react";
import { StyleProp, Touchable, TouchableOpacity, View, ViewStyle } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

const ArrowButton = (props: {style?:StyleProp<ViewStyle>, backgroundColor?:any, strokeColor?:any, onPress?:()=>void}) => {
    
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Svg width="72" height="71" viewBox="0 0 72 71" fill="none">
                <Circle cx="34.9959" cy="36.219" r="34.3661" fill={props.backgroundColor ?? "white"} stroke={props.strokeColor??"black"} strokeWidth={2}/>
                <Path d="M16.8913 24.4299L54.661 24.4299L35.7761 57.1394L16.8913 24.4299Z" fill={props.strokeColor??"black"} stroke={props.strokeColor??"black"} strokeWidth="2"/>
            </Svg>

        </TouchableOpacity>
    )
} 

export default ArrowButton