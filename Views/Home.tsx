import React, { useRef } from "react";
import TopBarCurved from "../Components/TopBarCurved";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { borderStyle, ButtonStyles, center, COLORS, pxtovh, pxtovw, vh } from "../style/style";
import { Text } from "react-native";
import Logo from "../Components/Logo";
import Button from "../Components/Button";
import TelephoneIcon from "../Components/TelephoneIcon";
import ArrowButton from "../Components/ArrowButton";

const Home = () => {

    const user = "Wojciech"

    const ScrollViewRef = useRef<ScrollView>(null)

    const OnScrollBottomClick = () => {
        ScrollViewRef.current?.scrollToEnd();
    }

    const OnScrollTopClick = () => {
        ScrollViewRef.current?.scrollTo({y: 0});
    }

    return (
        <ScrollView stickyHeaderIndices={[0]} ref={ScrollViewRef}>
            <Logo/>
            <StatusBar backgroundColor={COLORS.mainColor}/>
            <TopBarCurved>
                
                {/* Witaj, user */}
                <Text  style={style.helloUserStyle}>Witaj, <Text style={{fontWeight: "bold"}}>{user}</Text>!</Text>
                 
                {/* Umów wizytę button*/}
                <Button 
                    text="UMÓW WIZYTĘ"
                    style={{...ButtonStyles.buttonStyle, backgroundColor: "#fff",
                        ...center,
                        marginTop: 30,}}
                    textStyle={{...ButtonStyles.textStyle, color: COLORS.mainColor,}}
                />

                {/* W razie nagłego wypadku */}
                <View style={{...center, marginTop: 40}}>
                    <Text style={{...center, fontSize: 24, color: "#fff", fontWeight: "bold", width: "100%", textAlign: "center"}}>W RAZIE NAGŁEGO WYPADKU</Text>
                    {/* Table */}
                    <View style={{display: "flex", flexDirection: 'row', marginTop: 20}}>
                        <TelephoneIcon style={{marginRight: 5}}/>
                        <View style={{marginLeft: 5}}>
                            <Text style={style.emergencyText1}>Ul. Weterynaryjna 20</Text>
                            <Text style={style.emergencyText1}>01-420 Warszawa</Text>
                            <Text style={style.emergencyText1}>tel: 421 769 420</Text>
                            <Text style={{...style.emergencyText1, ...style.emergencyText2}}>Otwarte całą dobę</Text>
                        </View>
                    </View>
                </View>
                {/* Arrow to bottom */}
                <View style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", marginTop: 15}}>
                    <ArrowButton
                        backgroundColor={"white"}
                        strokeColor={COLORS.mainColor}
                        onPress={OnScrollBottomClick}
                    />
                </View>
            </TopBarCurved>
            
            {/* Menu */}
            <View style={{paddingBottom: vh(11), marginTop: vh(15)}}>
                <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center}}
                    text="MOJE ZWIERZĘTA"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
                />
                <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                    text="OSTATNIE WIZYTY"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
                />
                <Button
                    style={{...ButtonStyles.buttonStyle, backgroundColor: COLORS.mainColor, ...center, marginTop: 20}}
                    text="USTAWIENIA KONTA"
                    textStyle={{...ButtonStyles.textStyle, color: "#fff"}}
                />
                <Button
                    style={{...ButtonStyles.buttonStyle, ...borderStyle(4, COLORS.mainColor), backgroundColor: "#fff", ...center, marginTop: 40}}
                    text="WYLOGUJ SIĘ"
                    textStyle={{...ButtonStyles.textStyle, color: COLORS.mainColor}}
                />
                {/* Arrow to top */}
                <View style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", marginTop: 50}}>
                    <ArrowButton
                        style={{transform: [{rotateZ: "180deg"}]}}
                        strokeColor={COLORS.mainColor}
                        onPress={OnScrollTopClick}
                    />
                </View>
            </View>
            
        </ScrollView>
    )
}

const style = StyleSheet.create({
    helloUserStyle: {
        fontSize: 30,
        color: "#fff",
        marginLeft: pxtovw(39),
        marginTop: pxtovh(200)
    },

    emergencyText1: {
        fontSize: 20,
        color: "#fff",
        textAlign: "justify",
        width: "100%", 
    },
    emergencyText2: {
        fontWeight: "bold",
        marginTop: 25
    }
})

export default Home