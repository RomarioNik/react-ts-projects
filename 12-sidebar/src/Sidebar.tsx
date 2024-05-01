import logo from "./logo.svg";
import { links, social } from "./data";
import { useGlobalContext } from "./hooks";
import { FaTimes } from "react-icons/fa";

export const Sidebar = () => {
  const value = useGlobalContext();

  return (
    <aside
      className={value?.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}
    >
      <div className="aside-header">
        <img className="logo" src={logo} alt="logo" />
        <button
          className="btn-close"
          type="button"
          onClick={value?.closeSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map(({ id, icon, url, text }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>

      <ul className="social-links">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
