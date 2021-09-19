import React from "react";

type DropdownContextProps = {
  currentDropdownOpen: string;
  setCurrentDropdownOpen: React.Dispatch<React.SetStateAction<string>>;
};

const DropdownContext = React.createContext<Partial<DropdownContextProps>>({});

export const useDropdownData = (): Partial<DropdownContextProps> => {
  return React.useContext(DropdownContext);
};

interface DropdownProviderProps {
  children: unknown;
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({ children }) => {
  const [currentDropdownOpen, setCurrentDropdownOpen] = React.useState("");

  const value = {
    currentDropdownOpen,
    setCurrentDropdownOpen
  };
  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
