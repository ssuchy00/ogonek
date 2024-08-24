import React from "react";
import { ImageBase, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { borderStyle, center, COLORS } from "../style/style";
import { petInterface } from "../Views/Pet";
import { breeds } from "../Views/MyPets";

interface elementInterface {
    pet:petInterface
    onPress?:(pet:petInterface)=>void
}

const PetListElement = (props:elementInterface) => {

    const onPressHandle = () => {
        if(props.onPress!=undefined)
            props.onPress(props.pet)
    }

    return (
        <TouchableOpacity onPress={onPressHandle}>
        <View style={{ ...style.elementStyle}} >
            {/* Image */}
            <View style={style.imageStyle}></View>

            {/* Description */}
            <View style={style.descStyle}>
                <Text style={{fontWeight: 'bold', color: "black", ...style.textStyle}}>{props.pet.name}</Text>
                <Text style={style.textStyle}>{breeds.filter(f=>f.id==props.pet.type)[0].name}</Text>
                <Text style={style.textStyle}>{props.pet.breed}</Text>
            </View>
        </View>
        </TouchableOpacity>
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