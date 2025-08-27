import { Router } from "express";
import { getNearestAirport } from "../controllers/airport.controller";
import { protect } from "../middleware/auth";

const router = Router();
router.post("/nearest", getNearestAirport );
export default router;