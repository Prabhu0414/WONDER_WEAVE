import { Request, Response } from "express";
import { geocodeCity } from "../services/geocoding.service";
import { findNearestAirport } from "../services/airport.service";


export async function getNearestAirport(req: Request, res: Response) {
    try {
        const city = (req.body.city as string)?.trim();
        if (!city) {
            return res.status(400).json({ error: "City name is required" });
        }

        const geo = await geocodeCity(city);
        const { airport, distanceMeters } = await findNearestAirport(geo.lat, geo.lon);

        return res.json({
            input: { city, geocoded: geo},
            nearestAirport: airport,
            distanceMeters: Math.round(distanceMeters)
        });
     } catch (err: any) {
        console.error( err );
        return res.status(500).json({ error: err.message || "failed" });
     }
}