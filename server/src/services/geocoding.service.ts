import axios from "axios";


export type GeoPoint = {lat: number; lon: number; label: string};

export async function geocodeCity (city: string): Promise<GeoPoint> {
    const url = "https://nominatim.openstreetmap.org/search";
    const { data } = await axios.get(url, {
        params: { q: city, format: "json", addressdetails: 1, limit: 1},
        headers: { "User-Agent": "wonder_weave/1.0 (contact@example.com)" },
        timeout: 10000,
    });

    if(!Array.isArray(data) || data.length === 0) {
        throw new Error(`Could not geocode city: ${city}`);
    }

    const first = data[0];
    return {
        lat: parseFloat(first.lat),
        lon: parseFloat(first.lon),
        label: first.display_name,
    };
}