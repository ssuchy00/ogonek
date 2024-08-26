import React, { act, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import HorizontalSwitch from "../Components/HorizontalSwitch";
import { ButtonStyles, center, COLORS, pxtovw, vh, vw } from "../style/style";
import PetListElement from "../Components/PetListElement";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { NativeSearchBar } from "react-native-screens"; 
import { petInterface } from "./Pet";
import PetsList from "../Components/PetsList";


type myPetsScreenProp = StackNavigationProp<RootStackParamList, 'MyPets'>;


export const breeds = [
    {name: "Pies", id: 0},
    {name: "Kot", id: 1},
    {name: "Koszatniczka", id: 2},
]

export const petsArr:Array<petInterface> = [
    {id: 0, type: 0, name: "Afik", breed: "Shih Tzu"},
    {id: 1, type: 0, name: "Przemek", breed: "Kundel"},
    {id: 2, type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 3, type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 4, type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 5,type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 6,type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 7,type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 8,type: 0, name: "Murzyn", breed: "Kundel"},
    {id: 9,type: 2, name: "Tofik"},
]

const MyPets = () => {

    const navigation = useNavigation<myPetsScreenProp>();

    const petOnClickHandle = (pet:petInterface) => {
        navigation.navigate("Pet", {pet})
    }

    return (
        <>
        <Text style={style.headerStyle}>Twoje zwierzęta</Text>
        <PetsList onChoose={petOnClickHandle} />
        <Button text="DODAJ ZWIERZĘ" style={{backgroundColor: COLORS.mainColor, ...ButtonStyles.buttonStyle, left: vw(5), position: 'absolute', bottom: 10}} textStyle={{color: "#fff", ...ButtonStyles.textStyle}}/>
        </>
    )
}

const style = StyleSheet.create({
    headerStyle: {
        fontSize: 40,
        textAlign: "center",
        margin: 10
    }
})


export default MyPets