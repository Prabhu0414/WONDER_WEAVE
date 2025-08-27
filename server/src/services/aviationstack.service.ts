import axios from "axios";

const BASE = "https://api.aviationstack.com/v1";

export type AviationstackFlight = {
  departure: {
    airport: string;
    timezone?: string | null;
    iata?: string | null;
    icao?: string | null;
    terminal?: string | null;
    gate?: string | null;
    delay?: number | null;
    scheduled?: string | null;
  };
  arrival: {
    airport: string;
    timezone?: string | null;
    iata?: string | null;
    icao?: string | null;
    terminal?: string | null;
    gate?: string | null;
    delay?: number | null;
    scheduled?: string | null;
  };
  airline: {
    name?: string | null;
    iata?: string | null;
    icao?: string | null;
    callsign?: string | null;
  };
  flight: {
    number?: string | null;
    iata?: string | null;
    icao?: string | null;
  };
  live?: {
    updated?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    direction?: number;
    speed_horizontal?: number;
    speed_vertical?: number;
    is_ground?: boolean;
  } | null;
  flight_date?: string | null;
  flight_status?: string | null;
};


export async function searchFlightByIata(
    depIata: string,
    arrIata: string,
    opts?: {date?: string; limit?: number }
): Promise<AviationstackFlight[]> {
    const params: any = {
        access_key: process.env.AVIATIONSTACK_ACCESS_KEY,
        dep_iata: depIata,
        arr_iata: arrIata,
        limit: opts?.limit ?? 100
    };
    if( opts?.date) params.flight_date = opts.date;

    try{
        const {data} = await axios.get(`${BASE}/flights`, { params, timeout: 15000});
        if(data.error) throw new Error(data.error.message || "Aviationstack API error");
        //if (!data || !Array.isArray(data.data)) return [];
        return Array.isArray(data.data) ? data.data as AviationstackFlight[] : [];
        //return data.data as AviationstackFlight[];
    } catch(err: any) {
        throw new Error(`Aviationstack API error: ${err.message || err.toString()}`);
    }

}