import { promises as fs} from "fs";
import path from "path";
import { Airport } from "../types/airport";
import { harvesineMeters } from "../utils/haversine";

let AIRPORTS: Airport[] | null = null;

async function loadAirports(): Promise<Airport[]> {
  if (AIRPORTS) return AIRPORTS;

  const file = path.join(__dirname, "../data/airports.min.json");
  console.log("Loading airports from:", file);

  try {
    const raw = await fs.readFile(file, "utf8");
    console.log("Raw file length:", raw.length);
    AIRPORTS = JSON.parse(raw) as Airport[];
    console.log("Parsed airports count:", AIRPORTS.length);
  } catch (err) {
    console.error("Failed to load airports file:", err);
    AIRPORTS = [];
  }

  return AIRPORTS!;
}



export async function findNearestAirport(lat: number, lon: number): Promise<{airport: Airport; distanceMeters: number}> {
    const airports = await loadAirports();
    let best: Airport | null = null;
    let bestDist = Number.POSITIVE_INFINITY;

    for( const ap of airports) {
        if(!ap.iata || ap.lat=== undefined || ap.lon === undefined) continue;
        const d = harvesineMeters({ lat, lon}, {lat:ap.lat, lon:ap.lon });
        if(d < bestDist) {
            best = ap;
            bestDist = d;
        }
    }
    if(!best) throw new Error("No airport found in dataset.");
    return {airport: best, distanceMeters: bestDist};
    
}