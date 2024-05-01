import { UserContainer } from "./UserContainer";
// import { type User } from "./NavBar";

// type NavLinksProps = {
//   user: User;
//   logOut: () => void;
// };

export const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>

      <UserContainer />
    </div>
  );
};
