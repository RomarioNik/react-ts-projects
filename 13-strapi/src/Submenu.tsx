import { useGlobalContext } from "./hooks";
import { sublinks } from "./data";
import { useRef } from "react";

export const Submenu = () => {
  const value = useGlobalContext();

  const currentPage = sublinks.find((page) => page.pageId === value?.pageId);

  const submenuContainer = useRef<HTMLDivElement>(null);

  const handleMouseleave = (event: React.MouseEvent<HTMLDivElement>) => {
    const submenu = submenuContainer.current?.getBoundingClientRect();

    if (!submenu) return;

    const { left, right, bottom } = submenu;

    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      value?.setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      ref={submenuContainer}
      onMouseLeave={handleMouseleave}
    >
      {currentPage && (
        <article key={currentPage.pageId}>
          <h5>{currentPage.page}</h5>

          <ul
            className="submenu-links"
            style={{
              gridTemplateColumns:
                currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
            }}
          >
            {currentPage.links.map(({ id, url, icon, label }) => (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};
