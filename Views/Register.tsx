import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { ButtonStyles, center, COLORS, pxtovw } from "../style/style";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;


const Register = () => {

    const navigation = useNavigation<registerScreenProp>()

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
            <Text style={style.headerStyle}>ZAREJESTRUJ SIĘ</Text>
            <FormInput style={style.inputStyle} text="Imię"/>
            <FormInput style={style.inputStyle} text="Nazwisko"/>
            <FormInput style={style.inputStyle} text="Adres e-mail"/>
            <FormInput style={style.inputStyle} text="Hasło" secure={true}/>
            <FormInput style={style.inputStyle} text="Powtórz hasło" secure={true}/>
            <Button text="ZALOGUJ SIĘ" style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 40}} textStyle={{...ButtonStyles.textStyle, color: "#fff"}}/>
            <Text style={{...center, width: pxtovw(380), marginTop: 10, fontSize: 18}}>Masz konto? 
                <Text style={{color: COLORS.mainColor}} onPress={()=>navigation.navigate("Login")}>Zaloguj się!</Text></Text>
        </KeyboardAvoidingView>
     )
}

const style = StyleSheet.create({
    headerStyle: {
        fontSize: pxtovw(35),
        color: "#353535",
        fontWeight: "bold",
        ...center,
        marginTop: 20,
    },
    inputStyle: {
        marginTop: 20
    }
})

export default Register