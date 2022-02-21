import axios from "axios";

const loginConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginAPIInstance = axios.create(loginConfig);


const defaultConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const DefaultAPIInstance = axios.create(defaultConfig);