import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StylesConstants from "../commons/StylesConstants";

type ExpenseChartProps = {
    data?: any
}

export default function ExpenseChart({ data }: ExpenseChartProps) {
    return (<View style={styles.container}><Text style={{ fontFamily: StylesConstants.fontFamily }}>Chart Here</Text></View>)
}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#dddd",
        height: 220,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#cdcdcd"
    }
})