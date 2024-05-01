// import { useContext } from "react";
// import { NavBarContext } from "./NavBar";
import { useAppContext } from "./NavBar";

export const UserContainer = () => {
  //   const value = useContext(NavBarContext);
  const value = useAppContext();

  return (
    <div className="user-container">
      {value?.user ? (
        <>
          <p>Hello, {value.user?.name}</p>
          <button className="btn" type="button" onClick={value.logOut}>
            LogOut
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
