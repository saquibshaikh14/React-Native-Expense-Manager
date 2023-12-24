import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import StylesConstants from "../commons/StylesConstants";
import { convertAmountInLocal } from "../commons/Common";

type TotalExpenseViewProps = {
    totalExpenseAmount?: string;
}

export default function TotalExpenseView({ totalExpenseAmount = "0.00" }: TotalExpenseViewProps) {
    // const convertToLocalNumSyst = useCallback((totalExpenseAmount: string) => {
    //     return parseFloat(totalExpenseAmount).toLocaleString('en-IN');

    // }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>Total Expenses</Text>
            <Text style={styles.textExpense}>₹{convertAmountInLocal(totalExpenseAmount)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        // backgroundColor: "#ccc",
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    textLabel: {
        fontSize: 16,
        fontFamily: StylesConstants.fontFamily,
        color: "#5d5d5b"
    },
    textExpense: {
        fontFamily: StylesConstants.fontFamily,
        fontSize: 32,
        fontWeight: "800",
        color: "#080a0b"
    }
})