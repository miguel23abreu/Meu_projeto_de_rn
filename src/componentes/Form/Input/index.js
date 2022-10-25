import React from "react";
import {View, StyleSheet, TextInput} from "react-native"
import Responsive from 'react-native-lightweight-responsive';
import theme from "../../../globals/theme"

const Input =  ({...props}) =>{
    return(
        <View>
            <TextInput {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        paddingVertical: Responsive.font(18),
        paddingBottom: Responsive.font(2),
        fontSize: Responsive.font(13),
        borderBottomWidth: Responsive.font(1),
        borderColor: theme.colors.primary,
        marginBottom: Responsive.font(16)
    }
})