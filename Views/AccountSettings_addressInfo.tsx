import React from "react";
import { StyleSheet, Text, TextInput, TextInputComponent, View } from "react-native";
import { borderBottomStyle, borderStyle, ButtonStyles, center, COLORS } from "../style/style";
import Button from "../Components/Button";

const AccountSettings_addressInfo = () => {
    return (
        <View style={{padding: 20}}>
            <Text style={styles.header}>Zmiana hasła:</Text> 
            <TextInput style={styles.input} placeholder="Nowe hasło"/>
            <TextInput style={styles.input} placeholder="Powtórz nowe hasło"/>  
            <TextInput style={{...styles.input, marginTop: 50}} placeholder="Stare hasło"/>
            
            <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                    text="ZMIEŃ"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
                />
        </View>
    ) 
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 5,
        marginTop: 30
    },
    input:{
        fontSize: 22,
        marginTop: 10,
        ...borderBottomStyle(1)
    }
})

export default AccountSettings_addressInfo