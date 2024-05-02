import { sublinks } from "./data";
import { useGlobalContext } from "./hooks";
import { FaTimes } from "react-icons/fa";

export const Sidebar = () => {
  const value = useGlobalContext();

  return (
    <aside
      className={value?.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}
    >
      <div className="sidebar-container">
        <button
          className="close-btn"
          type="button"
          onClick={value?.closeSidebar}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links.map(({ id, url, icon, label }) => (
                  <li key={id}>
                    <a href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};
