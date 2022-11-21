import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api/v1/analyseProject",
    // headers: {
    //     "Content-type": "application/json"
    // }
});