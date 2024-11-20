// src/components/ui/Badge.tsx

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "destructive";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-secondary text-primary",
    destructive: "bg-red-200 text-red-800",
  };

  return (
    <span
      className={`px-2 py-1 text-sm rounded-md ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
