import React, { act, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import HorizontalSwitch from "../Components/HorizontalSwitch";
import { ButtonStyles, center, COLORS, pxtovw, vh, vw } from "../style/style";
import PetListElement from "../Components/PetListElement";
import Button from "../Components/Button";

const MyPets = () => {

    const breeds = [
        {name: "Pies", id: 0},
        {name: "Kot", id: 1},
        {name: "Koszatniczka", id: 2},
    ]

    const arr = [
        {type: 0, name: "Afik", breed: "Shih Tzu"},
        {type: 1, name: "Miśka", breed: "Dachowiec"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 0, name: "Murzyn", breed: "Kundel"},
        {type: 2, name: "Tofik"},
    ]

    const [activeType, setActiveType] = useState<number>(0)

    const onTypeChange = (index:number) => { 
        setActiveType(index);
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
                    arr.filter((arr_f:{type:number, name:string, breed?:string})=>arr_f.type==activeType).
                    map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement key={k} name={v.name} breed={v.breed} type={type}/>
                    }) :
                    arr.map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement key={k} name={v.name} breed={v.breed} type={type}/>
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