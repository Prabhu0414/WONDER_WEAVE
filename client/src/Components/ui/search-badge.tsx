import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  color?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

const colorMap: Record<string, string> = {
  default: "bg-gray-200 text-gray-800",
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  danger: "bg-red-100 text-red-800",
};

export const SearchBadge: React.FC<BadgeProps> = ({ children, color = "default", className = "" }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colorMap[color] || colorMap.default} ${className}`}
  >
    {children}
  </span>
);

export default SearchBadge;
