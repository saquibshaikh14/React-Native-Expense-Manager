import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import StylesConstants from "../commons/StylesConstants";
import ExpenseListItem from "./ExpenseListItem";

export default function MiniExpenseList() {
    return (
        <View style={styles.container}>
            <View><Text style={styles.labelText}>Recent Expenses</Text></View>

            {/* fetch the data and call the list item over the loop for recent history */}
            <ExpenseListItem />
            <ExpenseListItem />
            <ExpenseListItem />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "column",
        flex: 1
    },
    labelText: {
        color: "#080a0b",
        fontFamily: StylesConstants.fontFamily,
        fontSize: 16,
        fontWeight: "700",
        paddingBottom: 5,
        marginBottom: 15,
    },
    // miniListScrollView: {
    //     marginTop: 15,
    //     borderColor: "#e8e8e8",
    //     borderWidth: 1,
    // }
});