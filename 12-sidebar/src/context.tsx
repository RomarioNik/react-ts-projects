import { useState, createContext } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type ValueType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const GlobalContext = createContext<ValueType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
