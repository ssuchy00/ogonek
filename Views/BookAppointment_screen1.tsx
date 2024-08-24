import React from "react";
import { View,Text, TextInput, StyleSheet, TextStyle } from "react-native";  
import { Dropdown } from "react-native-element-dropdown";
import Button from "../Components/Button";
import { ButtonStyles, center, COLORS, vh, vw } from "../style/style";

export interface appointmentInterface {
    id:number,
    name:string,
    time:number //in minutes
    minPrice:number,
    maxPrice:number
}

export interface BookAppointment_screen1Interface {
    petID?:number,
}

export const appointmentTypes:Array<appointmentInterface> = [
    {id:0, name:"Szczepienie", time: 15, minPrice: 70, maxPrice:150},
    {id:1, name:"Obcięcie Pazurów", time: 15, minPrice: 50, maxPrice:100},
    {id:2, name:"Diagnoza", time: 30, minPrice: 100, maxPrice:200},
    {id:3, name:"Inne", time: 30, minPrice: 0, maxPrice:0},
]

const BookAppointment_screen1 = ({route}:{route:any}) => {
    
    const onTypeChooseHandle = (choosen:appointmentInterface) => {
        const {petID}:BookAppointment_screen1Interface = route.props
        if(petID)
        {
            
        }
    }

    return (
        
        <View style={style.bookAppointmentStyle}>
            <Text style={style.headerStyle}>UMÓW WIZYTĘ</Text>
            
            {/* Appointment type */}
            <Text style={style.header2Style}>Opisz wizytę</Text>
            <Dropdown 
                data={appointmentTypes}
                labelField={"name"}
                onChange={onTypeChooseHandle}
                valueField={"id"}
                style={style.dropdownStyle}
                itemTextStyle={{fontSize: 20}}
                placeholderStyle={{fontSize: 20}}
            />
            
            <Text style={style.header2Style}>Szczegóły</Text>
            <TextInput multiline style={style.textAreaStyle}/>
            <Button 
                text="Dalej >"
                style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
            />
        </View>
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

export default BookAppointment_screen1