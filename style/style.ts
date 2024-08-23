import { ColorValue, Dimensions, StyleProp, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const projectWidth = 430
const projectHeight = 1739

export const COLORS = {
    mainColor: "#4682B4",
    mainColorRGB: {r: 70, g: 130, b: 180}
}

export const vw = (percentWidth:number) => {
    return screenWidth * (percentWidth / 100)
}

export const vh = (percentHeight:number) => {
    return screenHeight * (percentHeight / 100)
}

export const center:StyleProp<any> = {
    marginLeft: "auto", marginRight: "auto"
} 

export const pxtovw = (pixelWidth:number) => {
    return vw((pixelWidth / projectWidth) * 100)
}

export const pxtovh = (pixelHeight:number) => {
    return vh((pixelHeight / projectHeight) * 100)
}

export const borderStyle:StyleProp<any> = (width: any, color?: ColorValue) => {
    return {
        borderWidth: width,
        borderColor: color??"black",
    }
}

export const borderBottomStyle:StyleProp<any> = (width: any, color?: ColorValue) => {
    return {
        borderBottomWidth: width,
        borderBottomColor: color??"black",
    }
}

 

export const LogoStyles = StyleSheet.create({
    logoStyle: {
        width: vw(100), 
        paddingLeft: 10,
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        top: 0
    },
    iconStyle: { 
        margin: 10
    },
    textStyle: { 
        fontSize: 48,
        color: "#D9D9D9",
        letterSpacing: 12,
        fontWeight: "bold"
        
    },

})

export const ButtonStyles = StyleSheet.create({
    buttonStyle: {
        width:pxtovw(386),
        borderRadius: 10,
        padding: 15,
    },
    textStyle: {
        fontSize: 32,
        textAlign: "center",
        fontWeight: "bold"
    }

})