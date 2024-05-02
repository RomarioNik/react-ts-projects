import { createContext, useState } from "react";

type AppContextProps = {
  children: React.ReactNode;
};

type ValueType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  pageId: string | null;
  setPageId: (id: string | null) => void;
};

export const GlobalContext = createContext<ValueType | null>(null);

export const AppContext = ({ children }: AppContextProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [pageId, setPageId] = useState<string | null>(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
