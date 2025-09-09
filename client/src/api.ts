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

// ------------ Discovery/Search ------------
export interface DiscoverRequest {
    place?: string;
    lat?: number;
    lon?: number;
    radiusMeters?: number;
    limit?: number;
    wantHotels?: boolean;
    wantRestaurants?: boolean;
    restaurantFilter?: {
        diet?: 'veg' | 'non-veg';
        cuisines?: string[];
    };
    wantCategories?: Array<'attraction' | 'museum' | 'zoo' | 'temple' | 'park' | 'monument'>;
}

export interface ClientPlace {
    id: string;
    name?: string;
    categories?: string[];
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
    website?: string;
    phone?: string;
    lat?: number;
    lon?: number;
    distance?: number;
}

export interface DiscoverResponse {
    center: { lat: number; lon: number };
    hotels: ClientPlace[];
    restaurants: ClientPlace[];
    places: ClientPlace[];
}

export const discoverPlaces = async (
    payload: DiscoverRequest
): Promise<DiscoverResponse> => {
    const res = await api.post<DiscoverResponse>("places/discover", payload);
    return res.data;
}

// ------------ Itineraries ------------
export interface SaveItineraryRequest {
    place?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    totalDays: number;
    guests: number;
    items: any[];
}

export interface ItineraryDoc extends SaveItineraryRequest {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export const saveItinerary = async (payload: SaveItineraryRequest): Promise<ItineraryDoc> => {
    const res = await api.post<ItineraryDoc>("itineraries", payload);
    return res.data;
}

export const listItineraries = async (): Promise<ItineraryDoc[]> => {
    const res = await api.get<ItineraryDoc[]>("itineraries");
    return res.data;
}

// ------------ Flights ------------
export interface FlightSearchRequest {
    fromCity: string;
    toCity: string;
    date?: string;
}

export interface FlightInfo {
    flightDate: string | null;
    status: string | null;
    airline: string | null;
    flightNumber: string | null;
    departure: {
        airport?: string | null;
        iata?: string | null;
        scheduled?: string | null;
        terminal?: string | null;
        gate?: string | null;
        delayMin?: number | null;
    };
    arrival: {
        airport?: string | null;
        iata?: string | null;
        scheduled?: string | null;
        terminal?: string | null;
        gate?: string | null;
        delayMin?: number | null;
    };
}

export interface FlightSearchResponse {
    query: { fromCity: string; toCity: string; date: string };
    resolved: any;
    count: number;
    fligths: FlightInfo[]; // server returns 'fligths'
}

export const searchFlights = async (
    payload: FlightSearchRequest
): Promise<FlightSearchResponse> => {
    const res = await api.post<FlightSearchResponse>("flights/search", payload);
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
