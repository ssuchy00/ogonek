import React from "react";
import { StyleProp, StyleSheet, Text, TextInput, View } from "react-native";
import { borderBottomStyle, borderStyle, center, pxtovw } from "../style/style";

const FormInput = (props: {style?: StyleProp<any>, text?:string, secure?:boolean}) => {
    return (
        <View style={{...style.viewStyle, ...props.style}}>
            <Text style={style.textStyle}>{props.text}</Text>
            <TextInput style={style.textInputStyle} secureTextEntry={props.secure??false}/>
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        position: "relative",
        width: pxtovw(382),
        height: 70,
        ...center,
    },
    textInputStyle: {
        ...borderBottomStyle(1, ""),
        fontSize: pxtovw(25),
        height: 45,
        position: "absolute",
        width: "100%", 
        top: 20
    },
    textStyle: {
        fontSize: pxtovw(22),
        position: "absolute",
        width: "100%",
    }
})


export default FormInput