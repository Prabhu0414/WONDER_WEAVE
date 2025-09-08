import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "secondary";
}

export const Badge: React.FC<BadgeProps> = ({ variant = "outline", className = "", ...props }) => {
  let base = "inline-block rounded px-2 py-1 text-xs font-semibold ";
  let variantClass = "";
  if (variant === "outline") {
    variantClass = "border border-pink-300 text-pink-700 bg-white";
  } else if (variant === "secondary") {
    variantClass = "bg-pink-100 text-pink-700";
  }
  return (
    <span {...props} className={base + variantClass + " " + className} />
  );
};
