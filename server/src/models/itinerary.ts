import mongoose from "mongoose";

const itineraryItemSchema = new mongoose.Schema(
  {
    id: String,
    type: String,
    title: String,
    description: String,
    time: String,
    price: String,
    rating: Number,
    image: String,
    day: Number,
    duration: String,
    category: String,
    cuisine: String,
    isCompleted: Boolean,
    attractionCategory: String,
  },
  { _id: false }
);

const itinerarySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    place: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    totalDays: { type: Number },
    guests: { type: Number, default: 1 },
    items: [itineraryItemSchema],
  },
  { timestamps: true }
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;


