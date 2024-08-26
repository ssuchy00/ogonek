import React, { useEffect, useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { borderStyle, center } from "../style/style";

interface TableInterface {
    data: Array<Array<string | number>>
    header?: Array<string | number>
    style?:StyleProp<ViewStyle>
    headerStyle?:StyleProp<ViewStyle>
    headerTextStyle?:StyleProp<TextStyle>
    cellStyle?:StyleProp<TextStyle>
    columnStyles?:Array<{index:number, style:StyleProp<TextStyle>}>
}

const Table = (props:TableInterface) => {
    
    const [columnWidth, setColumnWidth] = useState<number>(0)
    

    useEffect(()=>{
        const w = 100/props.data[0]?.length
        setColumnWidth(w)
        console.log(((props.columnStyles?.filter((f)=>f.index==0)[0])?.style))
    }, [])

    return (

        <View style={props.style}>
            {
                props.header && 
                <View style={{...style.rowStyle, ...style.headerStyle}}>
                    {
                        props.header?.map((e,k:number)=>{
                            return <Text 
                                style={{
                                width:columnWidth+"%", 
                                ...borderStyle(0,"transparent"),
                                ...style.cellStyle,
                                ...style.headerCellStyle,
                                }}
                                
                                key={k}>{e}</Text>
                        })
                    }
                </View>
            }
            
                {
                    props.data?.map((e:Array<string | number>,k:number)=>{
                        return (
                        <View style={{...style.rowStyle}}>
                            {e.map((cell, cell_k)=>{
                            return <Text 
                            style={{
                            width:columnWidth+"%",
                            ...style.cellStyle,
                            ...borderStyle(0,"transparent"),
                            ...StyleSheet.flatten(((props.columnStyles?.filter((f)=>f.index==cell_k)[0])?.style)),
                            ...StyleSheet.flatten(props.cellStyle)
                            }}
                            
                            key={"cell"+cell_k}>{cell}</Text>
                            }) }
                        </View>)
                    })
                }
        </View>
    )

}

const style = StyleSheet.create({
    tableStyle: {
        
    },
    rowStyle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    headerStyle: {

    },
    cellStyle: {
        padding: 2,
    },
    headerCellStyle: {
        fontWeight: "bold",
        
    },
    columnStyle: {

    }
})

export default Table;