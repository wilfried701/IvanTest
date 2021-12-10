import React from 'react'
import {StyleSheet,TouchableOpacity,Text,View} from "react-native"

export default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style={styles.button}>
                <Text style={styles.button_text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:350,
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:"#01579b",
        marginLeft:20
    },
    button_text:{
        color:"white",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontSize:16,
        textAlign:"center"
    }
})