import { Router } from "express";
import { searchFlights } from "../controllers/flight.controller";
import { protect } from "../middleware/auth";


const router = Router();
router.post("/search", searchFlights );
export default router;