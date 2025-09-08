import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input {...props} className={`border rounded px-2 py-1 ${className}`} />
);
