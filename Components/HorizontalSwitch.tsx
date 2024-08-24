import React, { useEffect, useState } from "react";
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native";
import { borderLeftStyle, COLORS, vw } from "../style/style";

interface arrayInterface {
    value?:any,
    content:string
}

const HorizontalSwitch = (props: {onChange?: (index:number)=>void, options:Array<arrayInterface>, backgroundColor?:ColorValue, activeColor?:ColorValue, borderColor?:ColorValue, style?:StyleProp<ViewStyle>}) => {
    const [optionWidth, setOptionWidth] = useState<number>(0)
    const [currentOption, setCurrentOption] = useState<number>(-1);

    useEffect(()=>{
        const len = props.options.length==0 ? 1 : props.options.length
        setOptionWidth(100/len)
    }, [])

    const width:string = (100/props.options.length)+"%"
    
    const switchOnPressHandle = (index:number) => {
        let newIndex;
        if(index==currentOption)
        {
            newIndex = currentOption>=props.options.length - 2 ? -1 : currentOption + 1 
        }else{
            newIndex = index 
        } 
        setCurrentOption(newIndex);
        if(props.onChange!=undefined)
            props.onChange(newIndex);
    }
 

    return (
        <View style={{ position: 'relative'}}>
            <View style={{...StyleSheet.flatten(props.style), ...style.switchStyle, backgroundColor: props.backgroundColor??"lightgray"}}>
                <View style={{backgroundColor: props.activeColor??COLORS.mainColor, height: "100%", position: 'absolute', left: (currentOption + 1) * optionWidth+"%", width: optionWidth+"%", ...borderLeftStyle(0, "transparent")}}></View>
            {
                props.options.map((val:arrayInterface, key:number)=>{
                    
                    return key < 1? 
                    <Text onPress={()=>switchOnPressHandle(val.value)} style={{...style.optionStyle, width: (optionWidth)+"%", ...borderLeftStyle(1, "transparent")}} key={val.value}>{val.content}</Text>
                    :
                    <Text onPress={()=>switchOnPressHandle(val.value)} style={{...style.optionStyle, width: (optionWidth)+"%", ...borderLeftStyle(1, props.borderColor??'gray')}} key={val.value}>{val.content}</Text>
                })
            }

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    switchStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionStyle: {
        height: '100%',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 18
    },
    activeStyle: {
    }
})

export default HorizontalSwitch