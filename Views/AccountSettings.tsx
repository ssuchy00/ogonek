import React from "react";
import { Text, View } from "react-native";
import Button from "../Components/Button";
import { ButtonStyles, center, COLORS } from "../style/style";
import { useNavigation } from "@react-navigation/native";

const AccountSettings = () => {

    const navigation = useNavigation();

    return (
        <View style={{padding: 10}}>
            <Text style={{fontSize: 25, marginBottom: 50}}>Witaj, Wojciech!</Text>
            <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                    text="ZMIEŃ DANE ADRESOWE"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff", fontSize: 28}}
                />
            <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                    text="ZMIEŃ HASŁO"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff", fontSize: 28}}
                />
        </View>
    )
}

export default AccountSettings