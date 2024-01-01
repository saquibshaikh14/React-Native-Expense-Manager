import React, { useEffect, useState } from "react";
import { Image, Keyboard, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInputEndEditingEventData, View } from "react-native";
import TopHeader from "../components/TopHeader";
import StylesConstants from "../commons/StylesConstants";
import FormInput from "../components/FormInput";
import DatePicker from "react-native-date-picker";
import TouchableOpacityWrapper from "../components/TouchableOpacityWrapper";
// import SearchableInput from "../components/SearchableInput";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import DBWrapper from "../DBWrapper";
import { asyncWrapper } from "../commons/Common";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

const dataSet = [
    { id: '1', title: 'Alpha' },
    { id: '2', title: 'Beta' },
    { id: '3', title: 'Alpha1' },
    { id: '4', title: 'Alpha2' },
    { id: '5', title: 'Beta2' },
    { id: '6', title: 'Gamma2' },
]


//TODO: Need add validation for inputs
//TODO: better handling of events
type Expense = {
    date: Date;
    name: string;
    category: string;
    amount: string;
}

type AddExpenseScreenProps = {
    navigation: StackNavigationProp<ParamListBase>
}

export default function AddExpenseScreen({ navigation }: AddExpenseScreenProps) {

    const [open, setOpen] = useState(false);
    const [expense, setExpense] = useState<Expense>({
        date: new Date(),
        name: "",
        category: "",
        amount: ""
    });

    const handleSave = asyncWrapper(async () => {
        console.log(await DBWrapper.insert(expense));
        navigation.goBack();
    });
    const updateExpense = ({ key, value }: { key: keyof Expense; value: Date | string }) => {
        setExpense((prevState: Expense) => {
            if (key === 'date' && typeof value === 'string') {
                value = new Date(value);
            }
            return { ...prevState, [key]: value };
        });
    }

    useEffect(() => {
        console.log("ex", expense)
    }, [expense])

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
                    <FormInput labelText="Expense Name"
                        autoCapitalize="words"
                        onEndEditing={(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
                            const value = event.nativeEvent.text;
                            updateExpense({ key: "name", value });
                        }} />
                    <FormInput labelText="Category"
                        onEndEditing={(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
                            const value = event.nativeEvent.text;
                            updateExpense({ key: "category", value });
                        }} />
                    <FormInput keyboardType="decimal-pad"
                        labelText="Amount"
                        onEndEditing={(event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
                            const value = event.nativeEvent.text;
                            updateExpense({ key: "amount", value });
                        }}
                    />

                    <FormInput labelText="Date" showSoftInputOnFocus={false} caretHidden={true} value={expense.date?.toLocaleDateString()} onTouchEnd={() => { setOpen(true); Keyboard.dismiss(); }} />

                    <DatePicker
                        modal
                        androidVariant="iosClone"
                        maximumDate={new Date()}
                        mode="date"
                        open={open}
                        date={expense.date}
                        onConfirm={(date) => {
                            setOpen(false);
                            console.log(typeof date)
                            updateExpense({ key: "date", value: date })
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                    />
                    <TouchableOpacityWrapper buttonText="Save" buttonStyle={styles.saveButton} textStyle={styles.saveButtonText} onPress={handleSave} />
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