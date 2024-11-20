import React, { ReactElement, useState, useEffect } from "react";

// Props for the main Tabs component
interface TabsProps {
  children: React.ReactNode;
  value?: string; // Controlled tab value
  defaultValue?: string; // Default tab value
  onValueChange?: (value: string) => void; // Callback for tab change
}

// Main Tabs component
export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  value,
  onValueChange,
}) => {
  const [currentValue, setCurrentValue] = useState(defaultValue || "");

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value); // Sync state with controlled value
    }
  }, [value]);

  const handleChange = (newValue: string) => {
    setCurrentValue(newValue);
    if (onValueChange) {
      onValueChange(newValue); // Notify parent of value change
    }
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
  children: React.ReactNode; // Children are the tab triggers
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
  value: string; // Identifier for the tab
  className?: string;
  currentValue?: string; // Currently selected tab
  onValueChange: (value: string) => void; // Callback for tab selection
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
      onClick={() => onValueChange(value)}
      className={`px-4 py-2 rounded-md font-medium transition ${
        currentValue === value
          ? "bg-primary text-white"
          : "bg-gray-200 text-primary hover:bg-primary hover:text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Props for TabsContent
interface TabsContentProps {
  children: React.ReactNode;
  value: string; // Identifier for the content to show
  currentValue?: string; // Currently selected tab
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
