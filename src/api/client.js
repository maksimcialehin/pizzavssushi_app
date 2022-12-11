import axios from "axios";
export default axios.create({
    baseURL: "http://192.168.0.101:8000"
    //baseURL: "http://192.168.31.20:8000"
});