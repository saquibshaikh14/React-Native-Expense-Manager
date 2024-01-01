import React, { RefObject, useCallback } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import StylesConstants from "../commons/StylesConstants";

type TextInputWrapperProps<T = FormInputProps> = TextInputProps & T;

type FormInputProps = {
    labelText?: string;
    // inputType?: KeyboardTypeOptions,
    // placeHolder?: string;
    // onChange?: (text: string) => void;
    isValid?: Boolean;
    ref?: RefObject<TextInput> | null;
}

export default function FormInput({ labelText, isValid = true, ref, ...remainingProps }: TextInputWrapperProps) {

    return (
        <View style={[styles.container]}>
            {labelText && <Text style={styles.labelText}>{labelText}</Text>}
            <TextInput style={[styles.input, isValid ? {} : { borderColor: "red" }]} autoComplete={"off"} enterKeyHint="next" {...remainingProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    labelText: {
        fontFamily: StylesConstants.fontFamily,
        color: "#030303",
        fontSize: 16
    },
    input: {
        marginTop: 5,
        borderRadius: 3,
        fontFamily: StylesConstants.fontFamily,
        color: "#5e5e5e",
        borderWidth: 1,
        borderColor: "#e8e8e8",
        backgroundColor: "#fcfcfc",
        fontSize: 14,
        elevation: 20,
        paddingLeft: 10,
        paddingRight: 10,
        //ios except ele
        shadowColor: '#ccc',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // for android, ele n shdowcol
    },
    inputContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e5ecf2',
        borderRadius: 5
    },

})