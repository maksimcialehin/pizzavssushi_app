import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import client from "../../api/client";
import styles from "./detail_style";

const DetailView = ({ navigation, route }) => {
    const [detail, setDetail] = useState("");
    const { objurl } = route.params;

    const getDetail = async (url) => {
        console.log(url);
        try {
            const response =await client.get(url);
            if (!response.ok) {
                console.log(response);
                setDetail(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { getDetail(objurl); }, []);
    return (
        <View style={styles.center}>
            <FlatList
                horizontal={true}
                data={detail.pizzeria_images}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {({item}) => {
                    return (
                        <Image
                            style={styles.pizzaImage}
                            source={{ uri: item.image, }}
                        />
                    )
                }}
            />
            <Text style={styles.title}>Restaurant: {detail.restaurant_name}</Text>
            <Text style={styles.details}>Address: {detail.street}</Text>
            <Text style={styles.details}>City: {detail.city}</Text>
            <Text style={styles.details}>Web: {detail.website}</Text>
            <Text style={styles.details}>Phone: {detail.phone_number}</Text>
            <Text style={styles.details}>Description: {detail.description}</Text>
            <Text style={styles.details}>Email: {detail.email}</Text>
        </View>
    );
};

export default DetailView;