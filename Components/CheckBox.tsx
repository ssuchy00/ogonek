import React, { useEffect, useRef, useState } from "react";
import { ColorValue, LayoutChangeEvent, MeasureOnSuccessCallback, Pressable, StyleProp, StyleSheet, TextStyle, Touchable, TouchableOpacity, View, ViewStyle } from "react-native";
import { Text } from "react-native";
import { borderStyle } from "../style/style";


interface checkboxInterface {
    style?:StyleProp<any>,
    boxStyle?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    text?:string,
    checked?:boolean,
    onPress?:(checked:boolean) => void,
    color?:ColorValue,
    disabled?:boolean
}

const CheckBox = (props:checkboxInterface) => {

    const checkboxRef = useRef<View>(null)

    const [checkboxHeight, setChecboxHeight] = useState<number>(0)
    const [isChecked, setIsChecked] = useState<boolean>(props.checked??false)
    const onLayout = (layout:LayoutChangeEvent) => {
        setChecboxHeight(layout.nativeEvent.layout.height);
    }

    const onPressHandle = () => {
        const checked = !isChecked;
        setIsChecked(checked)
        props.onPress?props.onPress(false):null
    }

    useEffect(()=>{

    });

    return (
        <Pressable disabled={props.disabled} ref={checkboxRef} onPress={onPressHandle} style={{...style.checkBoxStyle, ...StyleSheet.flatten(props.style), ...(props.disabled ? style.checkBoxDisabledStyle : null)}}>
            {/* box */}
            <View onLayout={onLayout} style={{...style.boxStyle, ...borderStyle(checkboxHeight/6, "black"), borderColor: props.color,  ...StyleSheet.flatten(props.boxStyle)}}>
                {
                    isChecked &&  <View style={{...style.checkedStyle, backgroundColor: props.color??"black", width: "80%", margin: "10%"}}></View>
                }
            </View>

            {/* Text */}
            <Text style={{...style.textStyle, fontSize: checkboxHeight / 1.5, ...StyleSheet.flatten(props.textStyle)}}>{props.text}</Text>
        </Pressable> || console.log(checkboxHeight)
    )
}

const style = StyleSheet.create({
    checkBoxStyle: { 
        display: "flex",
        flexDirection: "row",
    },
    checkBoxDisabledStyle: {
        opacity: 0.5
    },
    boxStyle: {
        height: "100%",
        aspectRatio: 1,
        marginTop: 5
    },
    textStyle: {
        marginLeft: 10,
        textAlignVertical: 'center'
    },
    checkedStyle: {
        aspectRatio: 1
    }
})

export default CheckBox