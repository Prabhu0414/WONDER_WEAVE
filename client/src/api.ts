import type { AxiosError } from "axios";
import axios from "axios";



const API_URL =  "http://localhost:5000/api";

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
    };
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupCredentials {
    username: string;
    email: string;
    password: string;
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


export const LoginUser = async (
    Credentials: LoginCredentials
): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("auth/login", Credentials);
    return res.data;
}

export const SignupUser = async (
    Credentials: SignupCredentials
): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("auth/signup", Credentials);
    return res.data;
}






export const  getErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        return (
            (error.response?.data as { message: string })?.message || error.message || "An unknown error occurred"
        );
    }
    return "An unknown error occurred";
}


export default api;
