"use client";

import React from "react";
 // optional, else just join classNames manually

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className=
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white shadow-lg transition hover:opacity-90 bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500"
    >
      {children}
    </button>
  );
};
