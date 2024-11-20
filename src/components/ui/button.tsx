// src/components/ui/Button.tsx

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryDark",
    secondary: "bg-secondary text-primary hover:bg-lightest",
    outline:
      "border border-primary text-primary hover:bg-primaryDark hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
