import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import airportRoutes from "./routes/airport.routes";
import flightRoutes from "./routes/flight.routes";
import placeRoutes from "./routes/placeRoute";
import { errorHandler } from "./middleware/errorHandler";

connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/api/health", (_req, res) => res.json({ ok: true}));

app.use("/api/auth", authRoutes);
app.use("/api/airports", airportRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/places", placeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})