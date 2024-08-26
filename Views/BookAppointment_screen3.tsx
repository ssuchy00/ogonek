import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View,  } from "react-native";
import { borderStyle, ButtonStyles, center, COLORS, vh, vw } from "../style/style";
import PetsList from "../Components/PetsList";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { petInterface } from "./Pet";
import { Calendar, LocaleConfig } from "react-native-calendars";
import ChooseHour, { hourInterface } from "../Components/ChooseHour";
import Button from "../Components/Button";

export interface BookAppointment_screen3Interface {
    appointmentTypeID: number
    appointmentDescription:string
    pet:petInterface
}

type BookAppointmentParamList = StackNavigationProp<RootStackParamList, 'BookAppointment_screen3'>;

const BookAppointment_screen3 = ({route}:{route:any}) => {
    const navigation = useNavigation<BookAppointmentParamList>();
    const {appointmentDescription,appointmentTypeID,pet}:BookAppointment_screen3Interface = route.params;
    const selectedHour = useRef<hourInterface | null>(null)
    const [selectedHourState, setSelectedHourState] = useState<hourInterface | null>(null)
    const [selected, setSelected] = useState<string>("")

    useEffect(()=>{
        console.log(selected, selectedHour)
    }, [selected])


    const onDayPress = (day:any) =>{
        setSelected(day.dateString)
    }

    const onHourPress = (hour:hourInterface) => {
        setSelectedHourState(hour)
    }

    const onNextPress = () => {
        console.log("NEXT", selectedHour.current, selected)
        navigation.navigate("BookAppointment_screen4", {appointmentDescription, appointmentTypeID, pet, date:selected, time:selectedHourState??{hour:0,minutes:0}})
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
                onChoose={onHourPress}
            />    
            <Button
                style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
                text="Dalej >"
                onPress={onNextPress}
                disabled={(selected=="" || selectedHourState==null)}
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