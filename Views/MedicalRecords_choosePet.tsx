import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import PetsList from "../Components/PetsList";
import { center } from "../style/style";
import { useNavigation } from "@react-navigation/native";
import { petInterface } from "./Pet";
import { MedicalRecordsInterface } from "./MedicalRecords";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type MedicalRecordsChooseAnimalParamList = StackNavigationProp<RootStackParamList, 'MedicalRecordsChoosePet'>;

const MedicalRecords_choosePet = ({route}:{route:any}) => {

    const navigation = useNavigation<MedicalRecordsChooseAnimalParamList>()

    const onAnimalChooseHandler = (pet:petInterface) => {
        navigation.navigate("MedicalRecords", {pet:pet})
    }

    useEffect(()=>{
        if(route.params.pet!=undefined)navigation.navigate("MedicalRecords", {pet:route.params.pet})
    })

    return (
        <>
            <Text style={style.header2Style}>Wybierz zwierzę</Text>
            <PetsList onChoose={onAnimalChooseHandler}/>
        </>
    )
}

const style = StyleSheet.create({
    header2Style: {
        fontSize: 29,
        marginTop: 10,
        ...center,
        marginBottom: 10
    },
})

export default MedicalRecords_choosePet