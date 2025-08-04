'use client';

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of your context
interface MobileMenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Create context with the correct type, and default to null
const MobileMenuContext = createContext<MobileMenuContextType | null>(null);

// Provider component
export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

// Custom hook with null check
export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenuContext must be used within a MobileMenuProvider");
  }
  return context;
};
