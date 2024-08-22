import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, {Path, G} from 'react-native-svg'
import { COLORS, vh, vw } from "../style/style";

const TopBarCurved = ({children}: {children: ReactNode}) => { 
    return (
        <View style={style.viewStyle} >
             <View style={style.svgStyle}>
                 <Svg width="430" height="785" viewBox="0 0 430 785" fill="none">
                <Path d="M0.000947479 0H430.001V740.812C258.605 761.696 181.695 823.326 -0.0090332 749.426L0.000947479 0Z" fill={COLORS.mainColor}/>
                </Svg>  
            </View> 
            <View style={style.componentsStyle}>
                {children}
            </View>
        </View>
    )
    
}

const style = StyleSheet.create({
    viewStyle: {
        transform: [{translateY: vh(-20)}],
        height: vh(60),
        paddingTop: vh(20),
        position: "relative"
    },
    svgStyle: {
        transform: [{scaleY: 0.7}],
        position: "absolute",
        top: 0,
        left: 0
    },
    componentsStyle: {
        position: "absolute",
        width: vw(100),
        height: vh(100), 
        top: vh(11),
        left: 0,
        zIndex: 50
    }
})

export default TopBarCurved