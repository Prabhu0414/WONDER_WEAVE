import { Request, Response } from "express";
import { geocodeCity } from "../services/geocoding.service";
import { findNearestAirport } from "../services/airport.service";
import { searchFlightByIata } from "../services/aviationstack.service";


export async function searchFlights(req: Request, res: Response) {
    try {
        const fromCity = (req.body.fromCity as string)?.trim();
        const toCity = (req.body.toCity as string)?.trim();
        const date = (req.body.date as string)?.trim();

        if(!fromCity || !toCity) {
            return res.status(400).json({ error: "fromCity and toCity are required" });
        }

        const [fromGeo, toGeo] = await Promise.all([geocodeCity(fromCity), geocodeCity(toCity)]);

        const [fromNearest, toNearest] = await Promise.all([
            findNearestAirport(fromGeo.lat, fromGeo.lon),
            findNearestAirport(toGeo.lat, toGeo.lon),
        ]);

        const depIata = fromNearest.airport.iata;
        const arrIata = toNearest.airport.iata;

        const fligthsRaw = await searchFlightByIata(depIata, arrIata, { date, limit: 100});

        const results = fligthsRaw.map(f => ({
             flightDate: f.flight_date,
      status: f.flight_status,
      airline: f.airline?.name ?? null,
      flightNumber: f.flight?.iata ?? f.flight?.icao ?? f.flight?.number ?? null,
      departure: {
        airport: f.departure?.airport,
        iata: f.departure?.iata,
        scheduled: f.departure?.scheduled,
        terminal: f.departure?.terminal ?? null,
        gate: f.departure?.gate ?? null,
        delayMin: f.departure?.delay ?? null,
      },
      arrival: {
        airport: f.arrival?.airport,
        iata: f.arrival?.iata,
        scheduled: f.arrival?.scheduled,
        terminal: f.arrival?.terminal ?? null,
        gate: f.arrival?.gate ?? null,
        delayMin: f.arrival?.delay ?? null,
      },
        }));

        return res.json({
            query: { fromCity, toCity, date: date || "today"},
            resolved: {
                from: {city: fromGeo.label, airport: fromNearest.airport },
                to: {city: toGeo.label, airport: toNearest.airport}
            },
            count: results.length,
            fligths: results
        });
    }  catch (err: any) {
        return res.status(500).json({ error: err.message || "search failed"})
    }
}