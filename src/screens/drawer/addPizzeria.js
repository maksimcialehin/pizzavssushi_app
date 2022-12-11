import { TextInput, Text, Image, SafeAreaView, Button, ScrollView } from "react-native"
import { Formik } from "formik";
import styles from "./addPizzeria_styles";
import validationSchema from "./addPizzeria_valid";

const AddPizzeria = () => {
    const value_array = ['restaurant_name', 'street', 'city', 'zip_code', 'website', 'phone_number', 'description', 'email']

    return (
        <Formik 
            initialValues={{
                restaurant_name: "",
                street: "",
                city: "",
                zip_code: "",
                website: "",
                phone_number: "",
                description: "",
                email: "",
            }}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 8));
            }}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <Image 
                            style={styles.image}
                            source={{ uri: "https://static.vecteezy.com/system/resources/previews/009/384/620/original/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png" }}
                        />
                        <TextInput
                            style={styles.textBox}
                            value={values.restaurant_name}
                            placeholder="Enter a new pizz place here"
                            onChangeText={handleChange("restaurant_name")}
                        />
                        <Text style={styles.error}>{errors.restaurant_name}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.street}
                            placeholder="street"
                            onChangeText={handleChange("street")}
                        />
                        <Text style={styles.error}>{errors.street}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.city}
                            placeholder="city"
                            onChangeText={handleChange("city")}
                        />
                        <Text style={styles.error}>{errors.city}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.zip_code}
                            placeholder="zip_code"
                            onChangeText={handleChange("zip_code")}
                        />
                        <Text style={styles.error}>{errors.zip_code}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.website}
                            placeholder="website"
                            onChangeText={handleChange("website")}
                        />
                        <Text style={styles.error}>{errors.website}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.phone_number}
                            placeholder="phone_number"
                            onChangeText={handleChange("phone_number")}
                        />
                        <Text style={styles.error}>{errors.phone_number}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.description}
                            placeholder="description"
                            onChangeText={handleChange("description")}
                        />
                        <Text style={styles.error}>{errors.description}</Text>
                        <TextInput
                            style={styles.textBox}
                            value={values.email}
                            placeholder="email"
                            onChangeText={handleChange("email")}
                        />
                        <Text style={styles.error}>{errors.email}</Text>
                        <Button 
                            style={styles.addButton}
                            onPress={handleSubmit}
                            title="Submit"
                        />
                    </ScrollView>
                </SafeAreaView>
            )}
        </Formik>
    );
}

export default AddPizzeria;