import React from "react";

interface HeroStatProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

 const HeroStat: React.FC<HeroStatProps> = ({ icon, label, value }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">{icon}</div>
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
};

export default HeroStat;
