import { useState, createContext } from "react";

type AppContextType = {
  name: string;
  setName: (name: string) => void;
};

type AppContextProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<AppContextType | null>(null);

// moved to useAppContext.ts
// export const useAppContext = () => useContext(GlobalContext);

export const AppContext = ({ children }: AppContextProps) => {
  const [name, setName] = useState<string>("John Do");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
