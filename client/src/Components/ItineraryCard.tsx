import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { TypeIcon } from "lucide-react";
import { getTypeColor } from "./typeColor";

interface ItineraryItem {
  id: string;
  type: string;
  title: string;
  description: string;
  time?: string;
  price?: string;
  rating?: number;
  image: string;
  day?: number;
  duration?: string;
  category?: string;
  cuisine?: string;
  isCompleted?: boolean;
  attractionCategory?: string;
}

interface ItineraryCardProps {
  item: ItineraryItem;
  index: number;
  favorites: string[];
  onToggleCompleted: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onRemove: (id: string) => void;
}

export function ItineraryCard({ item, index, favorites, onToggleCompleted, onToggleFavorite, onRemove }: ItineraryCardProps) {
  return (
    <div
      className={`flex gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-lg ${
        item.isCompleted
          ? "bg-green-50 border-green-200"
          : item.type === "rest"
          ? "bg-purple-50 border-purple-200"
          : "bg-white border-pink-200 hover:border-pink-300"
      }`}
    >
      <div className="flex flex-col items-center">
        <button onClick={() => onToggleCompleted(item.id)} className="mb-2 transition-colors duration-200">
          {item.isCompleted ? (
            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2l4-4" stroke="#fff" strokeWidth="2" fill="none" /></svg>
          ) : (
            <svg className="h-6 w-6 text-pink-400 hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
          )}
        </button>
        <div className={`p-2 rounded-full text-white ${getTypeColor(item.type)}`}>
          <TypeIcon type={item.type} />
        </div>
        {index < 99 && <div className="w-px h-16 bg-gradient-to-b from-pink-300 to-rose-300 mt-2" />}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`font-semibold ${item.isCompleted ? "line-through text-green-700" : item.type === "rest" ? "text-purple-900" : "text-pink-900"}`}>{item.title}</h3>
              {item.time && (
                <Badge variant="outline" className="text-xs border-pink-300 text-pink-700">
                  {item.time}
                </Badge>
              )}
              {item.duration && (
                <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700">
                  {item.duration}
                </Badge>
              )}
            </div>
            <p className={`text-sm mb-2 ${item.isCompleted ? "text-green-600" : item.type === "rest" ? "text-purple-600" : "text-pink-700"}`}>{item.description}</p>
            <div className="flex items-center gap-4">
              {item.price && <span className="text-sm font-semibold text-pink-600">{item.price}</span>}
              {item.rating && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-pink-800 font-medium">{item.rating}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            {item.type !== "rest" && (
              <button onClick={() => onToggleFavorite(item.id)} className="opacity-70 hover:opacity-100 transition-opacity">
                <svg className={`h-4 w-4 ${favorites.includes(item.id) ? "fill-red-500 text-red-500" : "text-pink-400"}`} viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </button>
            )}
            <button onClick={() => onRemove(item.id)} className="opacity-70 hover:opacity-100 transition-opacity text-pink-500 hover:text-red-500">
              <svg className="h-4 w-4" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
