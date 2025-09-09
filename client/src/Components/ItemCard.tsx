import React from "react";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { TypeIcon } from "./TypeColor.tsx";
import { getTypeColor } from "./typeColor";

interface ItemCardProps {
  item: any;
  onDragStart?: (e: React.DragEvent, item: any) => void;
  onDragEnd?: () => void;
  dragged?: boolean;
  children?: React.ReactNode;
}

export function ItemCard({ item, onDragStart, onDragEnd, dragged, children }: ItemCardProps) {
  return (
    <div
      draggable={!!onDragStart}
      onDragStart={onDragStart ? (e) => onDragStart(e, item) : undefined}
      onDragEnd={onDragEnd}
      className={`p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200 cursor-grab hover:shadow-md transition-all duration-200 hover:scale-105 active:cursor-grabbing ${dragged ? "opacity-50 blur-sm" : ""}`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className={`p-2 rounded-lg text-white ${getTypeColor(item.type)}`}>
          <TypeIcon type={item.type} />
        </div>
        <div className="flex gap-1">
          {item.cuisine && (
            <Badge variant="outline" className="text-xs border-pink-300 text-pink-700">
              {item.cuisine}
            </Badge>
          )}
          {item.attractionCategory && (
            <Badge variant="outline" className="text-xs border-pink-300 text-pink-700">
              {item.attractionCategory}
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700">
            {item.category}
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-1">
        {(item.type === "restaurant" || item.type === "attraction") && (
          <span className={`p-1 rounded-full text-white ${getTypeColor(item.type)}`}>
            <TypeIcon type={item.type} className="h-3.5 w-3.5" />
          </span>
        )}
        <h4 className="font-semibold text-sm text-pink-900">{item.title}</h4>
      </div>
      <p className="text-xs text-pink-700 mb-2">{item.description}</p>
      <div className="flex items-center justify-between">
        {item.price && <span className="text-sm font-bold text-pink-600">{item.price}</span>}
        {item.rating && (
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-pink-800 font-medium">{item.rating}</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
