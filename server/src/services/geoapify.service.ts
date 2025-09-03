import axios from "axios";
import { LRUCache } from "lru-cache";
import qs from 'qs';
import { CategoryMap, getCuisinesFromFeatures } from "../utils/geoapify";
import type { LatLng } from "../types/discovery";
import { isModuleNamespaceObject } from "util/types";


const GEOCODE_URL = 'https://api.geoapify.com/v1/geocode/search';
const PLACES_URL  = 'https://api.geoapify.com/v2/places';

const cache = new LRUCache<string, any>({
    max: 500,
    ttl: 1000*60*5
});

interface Feature {
    properties?: {
        name?: string;
        [key: string]: any;
    };
    [key: string]: any;
}

function withKey(params: Record<string, any>) {
    return { apikey: process.env.GEOAPIFY_API_KEY, ...params};
}

export async function geocode(place:string): Promise<LatLng | null> {
    const key = `geocode:${place.toLowerCase()}`;
    if(cache.has(key)) return cache.get(key)!;

    const { data } = await axios.get(GEOCODE_URL, { params: withKey({ text: place}) });
    const feat = data?.features?.[0];
    if(!feat) return null;

    const lat = feat?.properties?.lat;
    const lon = feat?.properties?.lon;
    if(typeof lat !== 'number' || typeof lon !== 'number') return null;
    
    const result = { lat, lon };
    cache.set(key, result);
    return result;
    
}


export async function fetchPlaces(
    categories: string[],
    center: LatLng,
    radiusMeters: number,
    limit: number,
    filters?: { nameLike?: string; cuisineHints?: string[] }
): Promise<any[]> {
    const circle = `circle:${center.lon},${center.lat},${Math.max(50, Math.min(radiusMeters, 20000))}`;
    const params = withKey ({
        categories: categories.join(','),
        filter: circle,
        limit,
    });

    const ck = `places:${qs.stringify({ categories, ...center, radiusMeters, limit, ...filters})}`;
    if (cache.has(ck)) return cache.get(ck)!;

    const { data } = await axios.get(PLACES_URL, { params });
    let features = data?.features || [];

    if(filters?.nameLike) {
        const needle = filters.nameLike.toLowerCase();
        features = features.filter((f: Feature) => (f?.properties?.name || '').toLowerCase().includes(needle));
    }
    if(filters?.cuisineHints?.length) {
        features = features.filter((f: Feature) => {
            const cuisines = getCuisinesFromFeatures(f);
            return filters.cuisineHints!.some(h => cuisines.includes(h));
        });
    }

    cache.set(ck, features);
    return features;
}

export const categories = {
    hotels: CategoryMap.hotels,
    restaurants: CategoryMap.restaurants,
    fromKeys(keys: string[]): string[] {
        const out = new Set<string>();
        keys.forEach(k => {
            const cats = (CategoryMap as any)[k] as string[] | undefined;
            if(cats) cats.forEach(c => out.add(c));
        });
        return [...out];
    }
}
