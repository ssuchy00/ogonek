import React, { useEffect } from "react";
import { petInterface } from "./Pet";
import { ScrollView, StyleSheet, Text } from "react-native";
import PreviousAppointment, { previousAppointmentInterface } from "../Components/PreviousAppointment";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { petsArr } from "./MyPets";
import { appointmentInterface } from "./BookAppointment_screen1";
import Button from "../Components/Button";
import { ButtonStyles, COLORS } from "../style/style";
import { useNavigation } from "@react-navigation/native";


export interface MedicalRecordsInterface {
    pet?: petInterface
}

type MedicalRecordsParamList = StackNavigationProp<RootStackParamList, 'MedicalRecords'>;

const MedicalRecords = ({route}:{route:any}) => {

    const navigation = useNavigation<MedicalRecordsParamList>()


    useEffect(()=>{
        console.log("medical records params:", route)
        if(route.params?.pet==undefined)navigation.navigate("MedicalRecordsChoosePet", {})
    }, [])

    const appointmentsArray:Array<previousAppointmentInterface> = [
        {
            date: "11.09.2024",
            id: 1,
            price: 80,
            title: "Szczepienie przeciwko wściekliźnie",
            description: "Brak uwag",
        },
        {
            date: "1.08.2024",
            id: 1,
            price: 200,
            title: "Kastracja",
            description: "Brak uwag",
        },
    ]
        

    return (
        <ScrollView style={style.mainStyle}>
            <Text style={style.titleStyle}>{route.params.pet?.name}</Text>
            {
                appointmentsArray.map((e,k)=>{
                    return (
                        <PreviousAppointment 
                            appointment={{...e, last: k==appointmentsArray.length-1}}
                            key={k}
                        />
                    )
                })
            }
        <Button 
            text="Powrót"
            onPress={()=>{navigation.goBack()}}
            style={{...ButtonStyles.buttonStyle, ...style.buttonStyle}}
            textStyle={{...ButtonStyles.textStyle, ...style.buttonTextStyle}}
        />    
        </ScrollView>
    )
}

const style = StyleSheet.create({
    mainStyle: {
        padding: 15
    },
    titleStyle: {
        fontSize: 35
    },
    buttonStyle: {
        backgroundColor: COLORS.mainColor,
        marginTop: 50,
    },
    buttonTextStyle: {
        color: "#fff"
    }
})

export default MedicalRecords