import React, { useEffect } from "react";
import { StyleSheet, Text,  } from "react-native";
import { center, vh, vw } from "../style/style";
import PetsList from "../Components/PetsList";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { petInterface } from "./Pet";

export interface BookAppointment_screen2Interface {
    appointmentTypeID: number
    appointmentDescription:string
    pet:petInterface
}

type BookAppointmentParamList = StackNavigationProp<RootStackParamList, 'BookAppointment_screen2'>;

const BookAppointment_screen2 = ({route}:{route:any}) => {

    const navigation = useNavigation<BookAppointmentParamList>();
    const {appointmentDescription,appointmentTypeID}:BookAppointment_screen2Interface = route.params;
    const params = route.params
    const onAnimalChooseHandler = (pet:petInterface) => {
        navigation.navigate("BookAppointment_screen3", {appointmentDescription, appointmentTypeID,pet})
    }

    useEffect(()=>{
        console.log("params:", params)
        if(params.pet!=undefined)navigation.navigate("BookAppointment_screen3", {appointmentDescription, appointmentTypeID, pet:params.pet})
    }, [])

    return (
        <>
            <Text style={style.headerStyle}>UMÓW WIZYTĘ</Text>
            
            {/* Choose animal */}
            <Text style={style.header2Style}>Wybierz zwierzę</Text>
            <PetsList onChoose={onAnimalChooseHandler}/>
        </>
    )
}

const style = StyleSheet.create({
    bookAppointmentStyle: {
        width: vw(90),
        marginTop: 10, 
        ...center
    },
    headerStyle: {
        fontSize: 35,
        textAlign: "center",
    },
    header2Style: {
        fontSize: 29,
        marginTop: 10,
        ...center,
        marginBottom: 10
    },
    dropdownStyle: {
        backgroundColor: "#D9D9D9",
        padding: 10,
        borderRadius: 10
    },
    textAreaStyle: {
        backgroundColor: "#D9D9D9",
        padding: 10,
        borderRadius: 10,
        height: vh(50),
        textAlignVertical: "top",
        fontSize: 20,
        color: "#636363"
    },
})

export default BookAppointment_screen2