import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import TopHeader from "../components/TopHeader";
import StylesConstants from "../commons/StylesConstants";
import FormInput from "../components/FormInput";
import DatePicker from "react-native-date-picker";
import TouchableOpacityWrapper from "../components/TouchableOpacityWrapper";


export default function AddExpenseScreen() {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <TopHeader
                center={{ component: <Text style={styles.headerCenterItem}>Add Expense</Text>, styles: styles.headerCenter }}
            />
            <View style={styles.iconCurrencyTopContainer}>
                <View style={styles.iconCUrrencyTop}>
                    <Image
                        source={require("../assets/icon-currency-addExpenseScreen.png")}
                        alt="currencyIcon"
                        style={styles.iconCurrencyTopImage}
                    />
                </View>
            </View>
            <ScrollView>
                <View style={styles.formContainer}>
                    <FormInput labelText="Expense Name" />
                    <FormInput labelText="Category" />
                    <FormInput keyboardType="decimal-pad" labelText="Amount" />
                    <TouchableWithoutFeedback onPressIn={() => setOpen(true)}>
                        <View>
                            <FormInput labelText="Date" editable={false} value={date.toLocaleDateString()} />
                        </View>
                    </TouchableWithoutFeedback>
                    <DatePicker
                        modal
                        androidVariant="iosClone"
                        maximumDate={new Date()}
                        mode="date"
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date);
                            console.log("confirmed")
                        }}
                        onCancel={() => {
                            setOpen(false);
                            console.log("cancelled")
                        }}
                    />
                    <TouchableOpacityWrapper buttonText="Save" buttonStyle={styles.saveButton} textStyle={styles.saveButtonText} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // borderWidth: 1,
    },
    headerCenterItem: {
        fontSize: 26,
        fontWeight: "700",
        color: "#030303",
        fontFamily: StylesConstants.fontFamily
    },
    headerCenter: {
        alignItems: "center",
        flex: 5,
        // padding: 4
    },
    iconCurrencyTopContainer: {
        // borderWidth: 1,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    iconCUrrencyTop: {
        borderRadius: 50,
        padding: 15,
        backgroundColor: "#f3f3f3",
        //ios except ele
        shadowColor: '#333',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // for android, ele n shdowcol
        elevation: 30

    },
    iconCurrencyTopImage: {
        width: 50, // Set the width and height to create a circular container
        height: 50,
    },
    formContainer: {
        marginTop: 20,
    },
    saveButton: {
        marginTop: 20,
        height: 40,
        width: 155,
        justifyContent: "center",
        backgroundColor: "#030303",
        borderRadius: 3,
        alignSelf: "center"
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: StylesConstants.fontFamily,
        fontWeight: "700",
    }
})