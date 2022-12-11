import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    error: {
        color: "red",
        fontSize: 18,
        marginBottom: 7,
        fontWeight: "600",
        paddingLeft: 20,
    },
    textBox: {
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingRight: 20,
        paddingeft: 20,
    },
    addButton: {
        borderColor: "#007BFF",
        backgroundColor: "#007BFF",
        borderWidth: 1,
        padding: 15,
    },
    container: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});

export default styles;