import React from "react";
import { ImageBase, StyleSheet, Text, View } from "react-native";
import { borderStyle, center, COLORS } from "../style/style";

interface elementInterface {
    type:string, 
    name:string,
    breed?:string
}

const PetListElement = (props:elementInterface) => {
    return (
        <View style={{ ...style.elementStyle}}>
            {/* Image */}
            <View style={style.imageStyle}></View>

            {/* Description */}
            <View style={style.descStyle}>
                <Text style={{fontWeight: 'bold', color: "black", ...style.textStyle}}>{props.name}</Text>
                <Text style={style.textStyle}>{props.type}</Text>
                <Text style={style.textStyle}>{props.breed}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    elementStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        ...center,
    },
    imageStyle: {
        width: "30%",
        aspectRatio: 1,
        backgroundColor: COLORS.mainColor
    },
    descStyle: {
        width: "70%",
        paddingLeft: 10
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 5
    }
})

export default PetListElement