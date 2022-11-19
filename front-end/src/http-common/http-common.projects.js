// API for the project entities.

import axios from "axios";

export default axios.create({
    baseURL: "https://ghost-busters-backend-f6c6b7uoga-uc.a.run.app/api/v1/projects",
    // headers: {
    //     "Content-type": "application/json"
    // }
});