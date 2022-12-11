import * as Yup from "yup";

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const website = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[azA-Z0-9-%]+&?)?$/;

const validationSchema = Yup.object({
    restaurant_name: Yup.string()
        .max(200, 'Value must be less than 200 chars')
        .min(3, 'Value must be at least 3 chars'),
    pizzeria: Yup.string()
        .max(200, 'Value must be less than 200 chars')
        .min(3, 'Value must be at least 3 chars'),
    city: Yup.string()
        .max(50, 'Value must be less than 50 chars')
        .min(3, 'Value must be at least 3 chars'),
    zip_code: Yup.string()
        .max(6, 'Value must be less than 6 chars')
        .min(5, 'Value must be at least 5 chars'),
    website: Yup.string().matches(website, 'URL is not valid'),
    phone_number: Yup.string().matches(phone, 'Phone number is not valid'),
    description: Yup.string().max(500, 'Value must be less than 500 chars'),
    email: Yup.string().email('Not a valid email'),
});

export default validationSchema;