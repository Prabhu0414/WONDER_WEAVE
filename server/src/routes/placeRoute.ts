import { Router } from "express";
import {
    geocodeHandler,
    hotelsHandler,
    restaurantsHandler,
    placesByCategoriesHandler,
    discoverHandler

} from "../controllers/discovery.controller";

const router = Router();

router.get('/geocode', geocodeHandler);
router.get('/hotels', hotelsHandler);
router.get('/restaurants', restaurantsHandler);
router.get('/places', placesByCategoriesHandler);
router.post('/discover', discoverHandler);

export default router;