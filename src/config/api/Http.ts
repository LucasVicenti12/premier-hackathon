import {baseURL} from "./BaseURL.ts";
import axios from "axios";

export const http = axios.create({
    withCredentials: true,
    baseURL: baseURL(),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
});