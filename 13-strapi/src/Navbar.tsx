import { NavLinks } from "./NavLinks";
import { useGlobalContext } from "./hooks";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const value = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <NavLinks />
        <button
          className="toggle-btn"
          type="button"
          onClick={value?.openSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
