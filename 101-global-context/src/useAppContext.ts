import { useContext } from "react";
import { GlobalContext } from "./context";

export const useAppContext = () => {
  const context = useContext(GlobalContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider'");

  return context;
};
