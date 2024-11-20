import React, { ReactElement } from "react";

// Props for the main Tabs component
interface TabsProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

// Main Tabs component
export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  value,
  onValueChange,
}) => {
  const [currentValue, setCurrentValue] = React.useState(defaultValue || value);

  const handleChange = (newValue: string) => {
    setCurrentValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement<any>, {
              currentValue,
              onValueChange: handleChange,
            })
          : child
      )}
    </div>
  );
};

// Props for TabsList
interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

// TabsList component
export const TabsList: React.FC<TabsListProps> = ({
  children,
  className = "",
}) => {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
};

// Props for TabsTrigger
interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  currentValue?: string;
  onValueChange?: (value: string) => void;
}

// TabsTrigger component
export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  value,
  className = "",
  currentValue,
  onValueChange,
}) => {
  return (
    <button
      onClick={() => onValueChange?.(value)}
      className={`px-4 py-2 rounded-md ${
        currentValue === value
          ? "bg-primary text-white"
          : "bg-lightest text-primary hover:bg-primaryDark hover:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Props for TabsContent
interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  currentValue?: string;
  className?: string;
}

// TabsContent component
export const TabsContent: React.FC<TabsContentProps> = ({
  children,
  value,
  currentValue,
  className = "",
}) => {
  return currentValue === value ? (
    <div className={`p-4 ${className}`}>{children}</div>
  ) : null;
};
