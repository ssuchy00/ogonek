import React, { useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { borderBottomStyle, borderStyle, ButtonStyles, center, COLORS } from "../style/style";
import Button from "./Button";

export interface ChooseHourInterface {
    minHour:number,
    maxHour:number,
    timeDivision:number,
    style?:StyleProp<ViewStyle>
    textStyle?:StyleProp<TextStyle>,
    onChoose?:(choosenHour:hourInterface) => void
}

export interface hourInterface {
    hour:number, minutes:number
}

const ChooseHour = (props:ChooseHourInterface) => {

    const onLayout = (layout:any) => { 
    }

    const [choosenHour, setChoosenHour] = useState<{hour:number,minutes:number} | null>(null)
    const [takenHours, setTakenHours] = useState<Array<{hour:number,minutes:number} | null>>([{hour:10, minutes:0},{hour:8, minutes:15}])


    const onChooseHourHandle = (hour:hourInterface) =>{
        setChoosenHour(hour)
        props.onChoose&&props.onChoose(hour)
    }

    return (
        <View style={props.style}>
            {
                 Array.from(Array(props.maxHour - props.minHour).keys()).map((e,key)=>{
                    const currHour = e+props.minHour 
                    return (
                        // Row
                        <View 
                            style={{...style.rowStyle, ...(currHour<props.maxHour?borderBottomStyle(1, "lightgray"):null)}}
                            onLayout={onLayout}
                            key={"main"+key}
                        >
                            {
                                Array.from(Array(props.timeDivision).keys()).map((f,l)=>{
                                    const minutesStamp = 60 / props.timeDivision
                                    const minutes = f*minutesStamp
                                    const isTaken:boolean = takenHours.filter(filt=>filt?.hour==currHour && filt.minutes==minutes).length > 0
                                    const isChoosen:boolean = choosenHour?.hour==currHour && choosenHour.minutes==minutes
                                    return (
                                            <TouchableOpacity onPress={()=>onChooseHourHandle({hour:currHour,minutes:minutes})} disabled={isTaken} key={l} style={{ aspectRatio: 1, width: (100/props.timeDivision)+"%", ...borderStyle(0,"black")}}>
                                                <Text key={"text"+l} style={{...style.cellStyle,...borderStyle(0,"black"), ...(isTaken&&style.cellTakenStyle), ...(isChoosen&&style.cellChoosenStyle)}}>{currHour}:{minutes.toString().padStart(2, "0")}</Text>
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
        display: "flex",
        flexDirection: "row",
        ...center,
    },

    cellStyle: {
        width: "70%",
        margin: "15%",
        aspectRatio: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20, 
        borderRadius: 999999,
        
    },

    cellTakenStyle: {
        color: "#ccc",
        
    },

    cellChoosenStyle: {
        backgroundColor: COLORS.mainColor,
        color: "#fff"
    }
})

export default ChooseHour