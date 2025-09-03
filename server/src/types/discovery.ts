export type LatLng = {
  lat: number;
  lon: number;
};

export type RestaurantFilter = {
    diet?: string;
    cuisine?: string[];
}

export type CategoryKey = 
    | 'attractions'
    | 'museum'
    | 'zoo'
    | 'temple'
    | 'park'
    | 'monument';


export type DiscoverRequest = {
    placel: string;
    lat?: number;
    lon?: number;
    radiusMeters?: number;
    limit?: number;

    wantHotels?: boolean;
    wantRestaurants?: boolean;
    restaurantFilter?: RestaurantFilter;
    wantCategories?: boolean;
}

export type PlaceFeature = {
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
  lat: number;
  lon: number;
  distance?: number; 
  datasource?: unknown;
  raw?: any; 
};