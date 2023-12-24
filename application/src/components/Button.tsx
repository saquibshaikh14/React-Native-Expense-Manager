import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

type ButtonProps = {
    buttonText?: string,
    textStyle?: StyleProp<TextStyle>,
    buttonStyle?: StyleProp<ViewStyle>
    onPress?: () => {}
}
export default function Button({ buttonText = "Default Button", textStyle, buttonStyle, onPress }: ButtonProps) {
    return (
        <View>
            <TouchableOpacity style={[styles.buttonStyle, buttonStyle]}><Text style={[styles.textStyle, textStyle]}>{buttonText}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#3498db',
        // padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    }
})