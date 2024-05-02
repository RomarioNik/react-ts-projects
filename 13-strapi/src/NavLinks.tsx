import { sublinks } from "./data";
import { useGlobalContext } from "./hooks";

export const NavLinks = () => {
  const value = useGlobalContext();

  const handleSubmenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      value?.setPageId(null);
    }
  };

  return (
    <div className="nav-links" onMouseOver={handleSubmenu}>
      {sublinks.map(({ page, pageId }) => (
        <button
          className="nav-link"
          key={pageId}
          type="button"
          onMouseEnter={() => value?.setPageId(pageId)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
