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


type myPetsScreenProp = StackNavigationProp<RootStackParamList, 'MyPets'>;


export const breeds = [
    {name: "Pies", id: 0},
    {name: "Kot", id: 1},
    {name: "Koszatniczka", id: 2},
]

const MyPets = () => {

    const navigation = useNavigation<myPetsScreenProp>();

    

    const arr:Array<petInterface> = [
        {id: 0, type: 0, name: "Afik", breed: "Shih Tzu"},
        {id: 1, type: 1, name: "Miśka", breed: "Dachowiec"},
        {id: 2, type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 3, type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 4, type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 5,type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 6,type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 7,type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 8,type: 0, name: "Murzyn", breed: "Kundel"},
        {id: 9,type: 2, name: "Tofik"},
    ]

    const [activeType, setActiveType] = useState<number>(-1)

    const onTypeChange = (index:number) => { 
        setActiveType(index);
    }

    const petOnClickHandle = (pet:petInterface) => {
        navigation.navigate("Pet", {pet})
    }

    return (
        <>
        <ScrollView style={{marginBottom: 100}}>
            <Text style={style.headerStyle}>Twoje zwierzęta</Text>
            <HorizontalSwitch 
                style={{ width: vw(90), ...center}} 
                activeColor={COLORS.mainColor} 
                backgroundColor={"lightgray"} 
                options={[{value: -1, content: "Wszystkie"}, ...breeds.map((v)=>{
                    return {value: v.id, content: v.name}
                })]} 
                onChange={onTypeChange}
            />

            {/* Pets */}
            <View style={{width: vw(90), marginTop: 20, ...center, height: "100%"}}>
                {
                    activeType!=-1 ?
                    arr.filter((arr_f:petInterface)=>arr_f.type==activeType).
                    map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement onPress={(pet)=>petOnClickHandle(v)} key={k} pet={v} />
                    }) :
                    arr.map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement onPress={(id)=>petOnClickHandle(v)} key={k} pet={v}/>
                    })
                }
                
            </View>
            
        </ScrollView>
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