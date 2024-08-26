import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";  
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { breeds } from "./MyPets";
import { ButtonStyles, center, COLORS, LogoStyles, vw } from "../style/style";
import Button from "../Components/Button"; 
import CheckBox from "../Components/CheckBox";

type petScreenProp = StackNavigationProp<RootStackParamList, 'Pet'>;

export interface petInterface {
    id:number,
    name:string,
    type:number,
    breed?:string,
    age?: number
}

const Pet = ({route}:{route:any}) => {

    const navigation = useNavigation<petScreenProp>()

    const {id,name,type,breed}:petInterface = route.params.pet

    useEffect(()=>{
         
    }, [])

    return (
    <ScrollView>
        <View style={style.petStyle}>
            <Text style={style.headerStyle}>{name}</Text>
            {/* Main Profile */}
            <View style={style.mainProfileStyle}>
                <View style={style.profilePictureStyle}></View>
                <View style={style.profileInfoStyle}>
                    <Text style={{...style.profileTextStyle, ...style.profileText2Style}}>{name}</Text>
                    <Text style={style.profileTextStyle}>{breeds.filter(f=>f.id==type)[0].name}</Text>
                    <Text style={style.profileTextStyle}>{breed}</Text>
                </View>
            </View>
            
            {/* Navigation */}
            <View style={style.navigationStyle}>
            <Button 
                    text="HISTORIA LECZENIA"
                    style={{...ButtonStyles.buttonStyle, ...style.buttonStyle}}
                    textStyle={{...ButtonStyles.textStyle, ...style.buttonTextStyle}}
                />
                <Button 
                    text="UMÓW WIZYTĘ"
                    style={{...ButtonStyles.buttonStyle, ...style.buttonStyle}}
                    textStyle={{...ButtonStyles.textStyle, ...style.buttonTextStyle}}
                    onPress={()=>navigation.navigate("BookAppointment_screen1", {pet:route.params.pet})}
                />
                <Button 
                    text="TERMINY"
                    style={{...ButtonStyles.buttonStyle, ...style.buttonStyle}}
                    textStyle={{...ButtonStyles.textStyle, ...style.buttonTextStyle}}
                />

                <CheckBox 
                    text="AKTYWNY"
                    textStyle={{letterSpacing: 2}}
                    color={COLORS.mainColor}
                    boxStyle={{height: 40}}
                    style={{marginLeft: 5, marginTop: 10}}
                    disabled
                    checked
                    onPress={(checked:boolean)=>{}}
                />
                
            </View>
        </View>
    </ScrollView>
    )
}

const style = StyleSheet.create({
    petStyle: {
        width: vw(90),
        ...center,
    },
    headerStyle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 5,
        letterSpacing: 2,
        color: "#333"
    },
    mainProfileStyle: { 
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
    },
    profilePictureStyle: {
        width: '55%',
        aspectRatio: 1,
        backgroundColor: COLORS.mainColor,
        borderRadius: 25
    },
    profileInfoStyle: { 
        width: "45%",
        paddingTop: 10,
        paddingLeft: 15
    },
    navigationStyle: {
        marginTop: 30,
        height: 500,
    },
    buttonStyle: {
        marginBottom: 15,
        backgroundColor: COLORS.mainColor,
    },
    buttonTextStyle: {
        color: "#fff"
    },
    profileTextStyle: {
        fontSize: 25,
        marginTop: 5,
    },
    profileText2Style: {
        fontWeight: "bold",
        color: "#000"
    },
})

export default Pet;