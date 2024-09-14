import React from "react";
import { petInterface } from "../Views/Pet"; 
import { StyleSheet, Text, View } from "react-native";
import { petsArr } from "../Views/MyPets";
import PetsList from "./PetsList";
import { borderLeftStyle } from "../style/style";

export interface previousAppointmentInterface {
    id: number
    date: string
    title: string,
    description?: string,
    price: number, 
    last?:boolean
}

export interface PreviousAppointmentProps {
    appointment: previousAppointmentInterface
}

const PreviousAppointment = (props: PreviousAppointmentProps) => {

    const {appointment} = props

    return (
        <View style={style.mainStyle}>
            {/* left border */}
            <View style={style.leftBorderStyle}>
                {/* Circle */}
                <View style={style.circleStyle}></View>
            </View>
            {/* Appointment */}
            <View style={style.appointmnentStyle}>
                <Text style={style.dateStyle}>{appointment.date}</Text>
                <Text style={style.appointmentTitleStyle}>{appointment.title}</Text>
                <Text style={style.appointmentDescriptionStyle}>{appointment.description}</Text>
                <View style={style.priceViewStyle}>
                    <Text style={style.priceTextStyle}>Cena: </Text>
                    <Text style={style.priceValueStyle}> {appointment.price.toFixed(2)} PLN</Text>
                </View>
                {appointment.last && <View style={{...style.circleStyle, ...style.circleLastStyle}}></View>}
            </View>
           

        </View>
    )    
}

const style = StyleSheet.create({
    mainStyle: {
        paddingLeft: 10,
        paddingTop: 0,
        display: "flex",
        flexDirection: "row"
    },
    appointmnentStyle: {
        paddingLeft: 20
    },
    dateStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    appointmentTitleStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    appointmentDescriptionStyle: {
        fontSize: 20
    },
    priceViewStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    priceTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    priceValueStyle: {
        fontSize: 18
    },
    leftBorderStyle: {
        ...borderLeftStyle(6, "gray"), 
        top: 5,
    },
    circleStyle: {
        width: 30,
        height: 30,
        borderRadius: 999,
        backgroundColor: "gray",
        position: "absolute",
        left: -18,
    },
    circleLastStyle: {
        bottom: -30
    }
})

export default PreviousAppointment