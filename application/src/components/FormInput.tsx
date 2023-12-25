import React, { RefObject, useCallback } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import StylesConstants from "../commons/StylesConstants";

type TextInputWrapperProps<T = FormInputProps> = TextInputProps & T;

type FormInputProps = {
    labelText?: string;
    // inputType?: KeyboardTypeOptions,
    // placeHolder?: string;
    // onChange?: (text: string) => void;
    ref?: RefObject<TextInput> | null;
}

export default function FormInput({ labelText, ref, ...remainingProps }: TextInputWrapperProps) {

    return (
        <View style={styles.container}>
            {labelText && <Text style={styles.labelText}>{labelText}</Text>}
            <TextInput style={styles.input} {...remainingProps} />
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
        color: "#a9a9a9",
        borderWidth: 1,
        borderColor: "#e8e8e8",
        backgroundColor: "#f3f3f3",
        fontSize: 14,
        elevation: 15,
        //ios except ele
        shadowColor: '#ccc',
        // shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // for android, ele n shdowcol
    }
})