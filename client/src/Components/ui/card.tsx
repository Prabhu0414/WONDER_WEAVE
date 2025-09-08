import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div {...props} className={`rounded-lg border bg-white shadow ${className}`} />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (
  <div {...props} className={`p-4 border-b bg-gray-50 ${className}`} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (
  <div {...props} className={`font-bold text-lg ${className}`} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (
  <div {...props} className={`p-4 ${className}`} />
);
