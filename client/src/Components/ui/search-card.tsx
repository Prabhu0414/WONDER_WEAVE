import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const SearchCard: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
    {children}
  </div>
);

export default SearchCard;


export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const SearchCardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`px-2 py-1 ${className}`}>
    {children}
  </div>
);
