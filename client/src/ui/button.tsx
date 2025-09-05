"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) => {
  const base = "rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    solid: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "border border-white/70 text-white hover:bg-white/15",
  };

  return (
    <button
      {...props}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
