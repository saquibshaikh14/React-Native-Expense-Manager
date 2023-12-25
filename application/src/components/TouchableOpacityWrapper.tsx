import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

type TouchableOpacityWrapperProps = {
    buttonText?: string;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
}
export default function TouchableOpacityWrapper({ buttonText = "Default Button", textStyle, buttonStyle, onPress }: TouchableOpacityWrapperProps) {
    return (
        <View>
            <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}><Text style={[styles.textStyle, textStyle]}>{buttonText}</Text></TouchableOpacity>
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