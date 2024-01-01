import React from "react";

import { StyleSheet, Text, View } from "react-native";
import TopHeader from "../components/TopHeader";
import TotalExpenseView from "../components/TotalExpenseView";
import StyleConstants from "../commons/StylesConstants";
import ExpenseChart from "../components/ExpenseChart";
import TouchableOpacityWrapper from "../components/TouchableOpacityWrapper";
import MiniExpenseList from "../components/MiniExpenseList";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
// import WrapperComponent from "../components/WrapperComponent";

type HomeScreenProps = {
    navigation: StackNavigationProp<ParamListBase>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            {/* <HeaderContainer> */}
            {/* <WrapperComponent wrapperStyle={{ alignment: "flex-start" }}>
                    <Text style={{ color: "black" }}>Some test Text</Text>
                </WrapperComponent> */}
            {/* <WrapperComponent wrapperStyle={{ alignment: "flex-end" }}>
                    <Text style={{ color: "black" }}>Some test Text</Text>
                </WrapperComponent> */}
            {/* </HeaderContainer> */}
            <TopHeader
                // left={{ component: <Text>Left</Text>, styles: { alignItems: "center", borderColor: "red", borderWidth: 2 } }}
                center={{ component: <Text style={styles.headerCenterItem}>Expense Manager</Text>, styles: styles.headerCenter }}
            // right={{ component: <Text>Right</Text>, styles: { alignItems: "center", borderColor: "red", borderWidth: 2, } }}
            />
            <TotalExpenseView totalExpenseAmount={1000.02.toFixed(2)} />
            {/* need to convert the totalExpenseAmount in string in order to handle it properly
            for two digin decimal value */}
            <ExpenseChart data={{/** pass required data here, currently leaving empty */ }} />
            {/* <Button buttonText="Test Button"/> */}
            <View style={styles.actionWrapper}>
                <TouchableOpacityWrapper buttonText="Expenses"
                    buttonStyle={styles.actionButton}
                    textStyle={styles.actionButtonText} />
                <TouchableOpacityWrapper buttonText="Add Expense"
                    buttonStyle={styles.actionButton}
                    textStyle={styles.actionButtonText}
                    onPress={() => {
                        console.log("add expense button clicked");
                        navigation.navigate("AddExpense")
                    }}
                />
            </View>
            <MiniExpenseList />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerCenterItem: {
        fontSize: 20,
        fontWeight: "800",
        color: "#080a0b",
        fontFamily: StyleConstants.fontFamily
    },
    headerCenter: {
        alignItems: "center",
        flex: 5,
        // padding: 4
    },
    actionWrapper: {
        marginTop: 25,
        flexDirection: "row",
        // backgroundColor: "gray",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    actionButton: {
        // flex: 1,
        height: 40,
        width: 155,
        justifyContent: "center",
        backgroundColor: "#030303",
        borderRadius: 2
        // marginHorizontal: 5

    },
    actionButtonText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: StyleConstants.fontFamily,
        fontWeight: "800",

    }


})