import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { petInterface } from "./Pet";
import { hourInterface } from "../Components/ChooseHour";
import { appointmentTypes } from "./BookAppointment_screen1";
import Table from "../Components/Table";
import { breeds } from "./MyPets";
import Button from "../Components/Button";
import { ButtonStyles, COLORS } from "../style/style";

export interface BookAppointment_screen4Interface {
    appointmentTypeID: number
    appointmentDescription:string
    pet:petInterface
    date:string,
    time:hourInterface
}

export const OwnerData =  {
    name: "Jan",
    lastname: "Kowalski",
    address: "ul. Narutowicza 217",
    city: "Łódź"
}

const BookAppointment_screen4 = ({route}:{route:any}) => {

    useEffect(()=>{
        console.log(route.params)
    }, [])

    const params:BookAppointment_screen4Interface = route.params

    return (
        <ScrollView style={{padding: "5%"}}>
            <Text style={{fontWeight: "bold", fontSize: 35, color: "#222"}}>Dane</Text>
            <Text style={{fontSize: 25, color: "#222"}}>Dane właściciela</Text>
            <Table 
                data={[
                    ['Imię', OwnerData.name],
                    ['Nazwisko', OwnerData.lastname],
                    ['Adres', OwnerData.address],
                    ['Miasto', OwnerData.city],
                ]}
                //header={['header1', 2]}
                columnStyles={[
                    {index: 1, style: {fontWeight: "bold"} },
                ]}
                style={{marginLeft:5}}
                cellStyle={{fontSize: 20}}
            />
            <Text style={{fontSize: 25, color: "#222"}}>Dane zwierzęcia</Text>
            <Table 
                data={[
                    ['Imię', params.pet.name],
                    ['Wiek', params.pet.age??"nd"],
                    ['Gatunek', breeds[params.pet.type].name],
                    ['Rasa', params.pet.breed??"nd"],
                ]}
                //header={['header1', 2]}
                columnStyles={[
                    {index: 1, style: {fontWeight: "bold"} },
                ]}
                style={{marginLeft:5}}
                cellStyle={{fontSize: 20}}
            />
            <Text style={{fontSize: 25, color: "#222"}}>Szczegóły</Text>
            <Table 
                data={[
                    ['Data', new Date(params.date).toLocaleDateString("pl")+" r."],
                    ['Godzina', `${params.time.hour}:${params.time.minutes.toString().padStart(2,"0")
                    }`],
                    ['Cel wizyty', appointmentTypes[params.appointmentTypeID].name],
                    ['Opis', params.appointmentDescription || "-"],
                ]}
                //header={['header1', 2]}
                columnStyles={[
                    {index: 1, style: {fontWeight: "bold"} },
                ]}
                style={{marginLeft:5}}
                cellStyle={{fontSize: 20}}
            />
            <Text style={{color: "#D32525", fontSize: 18, margin: 10}}>Zanim potwierdzisz, możesz się cofnąć i edytować dane</Text>
            <Button 
                text="Potwierdź"
                style={{backgroundColor: COLORS.mainColor, ...ButtonStyles.buttonStyle}}
                textStyle={{color: "#fff",...ButtonStyles.textStyle}}
            />
        </ScrollView>
    )
}

export default BookAppointment_screen4