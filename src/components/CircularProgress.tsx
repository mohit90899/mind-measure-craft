
import React from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label: string;
}

const getScoreColor = (percentage: number) => {
  if (percentage >= 71) return '#22c55e'; // Green for strong areas
  if (percentage >= 41) return '#eab308'; // Yellow for developing areas
  return '#ef4444'; // Red for areas needing attention
};

const getScoreColorLight = (percentage: number) => {
  if (percentage >= 71) return '#dcfce7'; // Light green
  if (percentage >= 41) return '#fef3c7'; // Light yellow
  return '#fecaca'; // Light red
};

const CircularProgress = ({ 
  percentage, 
  size = 80, 
  strokeWidth = 8, 
  label 
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const strokeColor = getScoreColor(percentage);
  const bgColor = getScoreColorLight(percentage);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={bgColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-positivity-brown">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-sm text-center text-positivity-brown-dark font-medium max-w-20">
        {label}
      </p>
    </div>
  );
};

export default CircularProgress;
