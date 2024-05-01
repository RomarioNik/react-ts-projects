import { useState, createContext, useContext } from "react";
import { NavLinks } from "./NavLinks";

type User = { name: string } | null;

type UserContext = {
  user: User;
  logOut: () => void;
};

const NavBarContext = createContext<UserContext | null>(null);

export const useAppContext = () => useContext(NavBarContext);

export const NavBar = () => {
  const [user, setUser] = useState<User>({ name: "Bob" });

  const logOut = (): void => {
    setUser(null);
  };

  return (
    <NavBarContext.Provider value={{ user, logOut }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};
