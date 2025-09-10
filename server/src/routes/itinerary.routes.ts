import { Router, Request } from "express";
import Itinerary from "../models/itinerary";
import { protect } from "../middleware/auth";

const router = Router();

// Create/save itinerary
router.post("/", protect, async (req: Request, res) => {
  try {
    const body = req.body || {} as any;
    const doc = await Itinerary.create({
      user: req.user!.id,
      place: body.place,
      startDate: body.startDate,
      endDate: body.endDate,
      totalDays: body.totalDays,
      guests: body.guests,
      items: Array.isArray(body.items) ? body.items : [],
    });
    res.status(201).json(doc);
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to save itinerary" });
  }
});

// List itineraries for user
router.get("/", protect, async (req: Request, res) => {
  try {
    const list = await Itinerary.find({ user: req.user!.id }).sort({ createdAt: -1 }).lean();
    res.json(list);
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to fetch itineraries" });
  }
});

// Get single itinerary
router.get("/:id", protect, async (req: Request, res) => {
  try {
    const doc = await Itinerary.findOne({ _id: (req.params as any).id, user: req.user!.id }).lean();
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json(doc);
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed to fetch itinerary" });
  }
});

export default router;


