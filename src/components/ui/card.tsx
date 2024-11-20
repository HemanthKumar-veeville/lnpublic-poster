// src/components/ui/Card.tsx

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`rounded-lg shadow-md ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
};

export const CardDescription: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

export const CardContent: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
