import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import client from "../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
    const [data, setData] = useState([]);

    const getList = async () => {
        const response = await client.get("/");
        setData(response.data);
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <SafeAreaView style={styles.center}>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                onPress={() => {
                                    navigation.navigate("Detail", {
                                        objurl: item.absolute_url,
                                    });
                                }}
                            >
                                <Card
                                    logo={item.logo_image}
                                    title={item.restaurant_name}
                                    details={item.city}
                                />
                            </TouchableOpacity>

                        );
                    }}
                />
            </View>     
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eeeeee",
        padding: 20,
    },
});

export default ListView;