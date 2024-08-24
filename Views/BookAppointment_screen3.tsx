import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View,  } from "react-native";
import { borderStyle, center, vh, vw } from "../style/style";
import PetsList from "../Components/PetsList";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { petInterface } from "./Pet";
import { Calendar, LocaleConfig } from "react-native-calendars";
import ChooseHour from "../Components/ChooseHour";

export interface BookAppointment_screen3Interface {
    appointmentTypeID: number
    appointmentDescription:string
    pet:petInterface
}

type BookAppointmentParamList = StackNavigationProp<RootStackParamList, 'BookAppointment_screen3'>;

const BookAppointment_screen3 = ({route}:{route:any}) => {

    const navigation = useNavigation<BookAppointmentParamList>();
    const {appointmentDescription,appointmentTypeID,pet}:BookAppointment_screen3Interface = route.params;

    const [selected, setSelected] = useState<string>("")

    useEffect(()=>{
        console.log(route.params)
    }, [])


    const onDayPress = (day:any) =>{
        setSelected(day.dateString)
    }
    
    return (
        <ScrollView style={style.bookAppointmentStyle}>
            <Text style={style.headerStyle}>UMÓW WIZYTĘ</Text>
            
            {/* Choose date */}
            <Text style={style.header2Style}>Wybierz datę</Text>
            <Calendar 
            minDate={new Date().toString()}
            firstDay={1}
            style={{borderRadius:20, ...borderStyle(1, "lightgray")}}
            markedDates={{
                [selected]:{selected:true, selectedDotColor: 'red'}
            }}

            onDayPress={onDayPress}
            />

            {/* Choose hour*/}
            <Text style={style.header2Style}>Wybierz godzinę</Text>
            <ChooseHour 
                minHour={8}
                maxHour={18}
                timeDivision={4}
                style={style.chooseHourStyle}
            />           
        </ScrollView>
    )
}

const style = StyleSheet.create({
    bookAppointmentStyle: {
        width: vw(90),
        marginTop: 10, 
        marginBottom: 20,
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
    chooseHourStyle: {
        width: vw(90),
        backgroundColor: "#fff",
        borderRadius:20,
        ...borderStyle(1, "lightgray"),
        
    }
})

export default BookAppointment_screen3