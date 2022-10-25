import React from "react";
import {View, Text, StyleSheet } from "react-native"
import Responsive from "react-native-lightweight-responsive";
import { Input } from "../../../componentes/Form/Input"
import theme from "../../../globals/theme";

const Login = () => {
    <View style={styles.container}>
        <Text style= {styles.title}>Entrar</Text>
        <View style = {styles.form}>
            <Text style = {styles.inputTitle}>Email</Text>
            <Input placeholder="exemplo@gmail.com" icon />
        </View>
        <Input />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    title:{
        fontSize:Responsive.font(26),
        color: theme.colors.title,
        fontWeight: "bold"
    },
    form:{
        width: "100%",
        justifyContent: "center",
        padding: Responsive.font(24)
    },
    inputTitle:{
        width: "100%",
        color: theme.colors.primary,
        fontWeight: "bold"
    }
})

export {Login}