// @/components/ui/alert.tsx
import React from "react";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, className }) => {
  return <div className={`p-4 rounded-md border ${className}`}>{children}</div>;
};

export const AlertTitle: React.FC<AlertProps> = ({ children, className }) => {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
};

export const AlertDescription: React.FC<AlertProps> = ({
  children,
  className,
}) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};
