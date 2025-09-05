import React from "react";

interface HeaderBlockProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const HeaderBlock: React.FC<HeaderBlockProps> = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-sm font-medium text-orange-500 uppercase tracking-wide">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
    </div>
  );
};
