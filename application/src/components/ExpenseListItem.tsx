import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { convertAmountInLocal } from "../commons/Common";
import StylesConstants from "../commons/StylesConstants";

type ExpenseListItemProps = {}

export default function ExpenseListItem({ }: ExpenseListItemProps) {
    return (
        <View style={[styles.container, styles.shadowProps]}>
            <View style={styles.iconContainer}><Text style={styles.iconText}>₹</Text></View>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.labelExpense}>Food</Text>
                    <Text>Groceries</Text>
                </View>
                <Text style={styles.expenseAmount}>{convertAmountInLocal("10000.300")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        // padding: 10,
        paddingHorizontal: 10,
        backgroundColor: StylesConstants.lighter,
        borderRadius: 3,
        height: 70,
        borderWidth: 1,
        // borderColor: "#eee"
        borderColor: "#e8e8e8"
    },
    iconContainer: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        backgroundColor: "#030303"
    },
    iconText: {
        alignItems: "center",
        color: "#fff",
        fontFamily: StylesConstants.fontFamily,
        fontWeight: "700",
        fontSize: 18
    },
    shadowProps: {
        //ios except ele
        shadowColor: '#ccc',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // for android, ele n shdowcol
        elevation: 30
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: 10,
        alignItems: "center",
        // borderWidth: 1,
    },
    labelCategory: {
        fontFamily: StylesConstants.fontFamily,
        fontSize: 12,
    },
    labelExpense: {
        fontFamily: StylesConstants.fontFamily,
        fontSize: 16,
        fontWeight: "800",
        color: StylesConstants.fontColor
    },
    expenseAmount: {
        color: "#030303",
        fontSize: 16,
        fontWeight: "700",
    }
})