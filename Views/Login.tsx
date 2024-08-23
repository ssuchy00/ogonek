import React from "react";
import { StyleSheet, Text } from "react-native";
import FormInput from "../Components/FormInput";
import { ButtonStyles, center, COLORS, pxtovw } from "../style/style";
import Button from "../Components/Button";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const Login = () => {

    const navigation = useNavigation<loginScreenProp>()

     return (
        <>
        <Text style={style.headerStyle}>ZALOGUJ SIĘ</Text>
        <FormInput style={style.inputStyle} text="Adres e-mail"/>
        <FormInput style={style.inputStyle} text="Hasło" secure={true}/>
        <Button text="ZALOGUJ SIĘ" style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 40}} textStyle={{...ButtonStyles.textStyle, color: "#fff"}}/>
        <Text style={{...center, width: pxtovw(380), marginTop: 10, fontSize: 18}}>Nie masz konta? <Text style={{color: COLORS.mainColor}} onPress={()=>navigation.navigate("Register")}>Zarejestruj się!</Text></Text>
        
        </>
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

export default Login