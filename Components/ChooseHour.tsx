import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, Touchable, TouchableOpacity, View, ViewStyle } from "react-native";
import { borderBottomStyle, center } from "../style/style";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export interface ChooseHourInterface {
    minHour:number,
    maxHour:number,
    timeDivision:number,
    style?:StyleProp<ViewStyle>
    textStyle?:StyleProp<TextStyle>
}

const ChooseHour = (props:ChooseHourInterface) => {

    const onLayout = (layout:any) => {
        console.log(layout)
    }

    return (
        <View style={props.style}>
            {
                 Array.from(Array(props.maxHour - props.minHour + 1).keys()).map((e,key)=>{
                    const currHour = e+props.minHour
                    console.log(currHour)
                    return (
                        // Row
                        <View 
                            style={{...style.rowStyle, ...(currHour<props.maxHour?borderBottomStyle(1, "lightgray"):null)}}
                            onLayout={onLayout}
                        >
                            {
                                Array.from(Array(props.timeDivision).keys()).map((f,l)=>{
                                    return (
                                        <TouchableOpacity>
                                            <Text style={{...style.cellStyle,}}>c</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

const style = StyleSheet.create({
    rowStyle: {
        width: "90%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        ...center,
    },

    cellStyle: {
        aspectRatio: 1
    }
})

export default ChooseHour