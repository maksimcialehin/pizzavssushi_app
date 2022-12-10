import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native"

const ScreenA = () => {
    const [pizzeria, setPizzeria] = useState(" ");
    return (
        <SafeAreaView>
            <Text style={styles.text}>
                {pizzeria}
            </Text>
            <TextInput 
                style={styles.textBox}
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Restaurant"
                onChangeText={(text) => setPizzeria(text)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textBox: {
        marginTop: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
    },
    text: {
        marginTop: 100,
        fontSize: 40,
        color: "red",
        textAlign: "center",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
});

export default ScreenA;