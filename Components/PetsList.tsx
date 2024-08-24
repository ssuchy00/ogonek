import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HorizontalSwitch from "./HorizontalSwitch";
import { center, COLORS, vw } from "../style/style";
import { breeds, petsArr } from "../Views/MyPets";
import { petInterface } from "../Views/Pet";
import PetListElement from "./PetListElement";

export interface PetsListInterface {
    onChoose: (pet:petInterface)=>void
}

const PetsList = (props:PetsListInterface) => {

    const [ activeType, setActiveType] = useState<number>(-1)

    const onTypeChange = (index:number) => { 
        setActiveType(index);
    }

    return (
        <>
        <ScrollView style={{marginBottom: 100}}>
            
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
                    petsArr.filter((arr_f:petInterface)=>arr_f.type==activeType).
                    map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement onPress={(pet)=>props.onChoose(v)} key={k} pet={v} />
                    }) :
                    petsArr.map((v,k)=>{
                        const type:string = (breeds.filter((f:{name:string, id:number})=>f.id==v.type)[0])?.name
                        return <PetListElement onPress={(id)=>props.onChoose(v)} key={k} pet={v}/>
                    })
                }
                
            </View>
            
        </ScrollView>
        
        </>
    )
}



export default PetsList