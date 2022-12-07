import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, Image, FlatList } from "react-native"
import client from "../../api/client";

const ListView = () => {
    const [data, setData] = useState([]);
    const myText = "New Goblin Mode"

    const getList = async () => {
        const response = await client.get("/");
        setData(response.data);
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <SafeAreaView style={styles.center}>
            <Image
                style={styles.pizzaImage}
                source={{uri: "https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png"}}
            />
            <Text style={styles.baseText}>Pizza vs Sushi App</Text>
            <Text style={styles.newText}>{myText}</Text>
            <Text style={styles.title}>List View</Text>
            <Text>{data.length} Pizzerias</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.itemText}>
                            {item.restaurant_name}, {item.city}
                        </Text>
                    );
                }}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    },
    pizzaImage: {
        width: 220,
        height: 220,
    },
    itemText: {
        color: "green",
        fontSize: 20,
    },
});

export default ListView;