import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", dark = false }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        stroke="currentColor" 
        strokeWidth="4" 
        className={dark ? "text-white" : "text-slate-900"}
      />
      <text 
        x="50" 
        y="65" 
        fontFamily="sans-serif" 
        fontWeight="bold" 
        fontSize="55" 
        textAnchor="middle" 
        fill="currentColor"
        className={dark ? "text-white" : "text-slate-900"}
      >
        CI
      </text>
    </svg>
  );
};