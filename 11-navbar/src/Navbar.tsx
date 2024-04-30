import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  //   const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    console.log(linksRef.current?.getBoundingClientRect());
    setShowLinks((prev) => !prev);
  };

  const linkStyle = {
    height: `${
      showLinks ? linksRef.current?.getBoundingClientRect().height : 0
    }px`,
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          style={linkStyle}
          //   ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
