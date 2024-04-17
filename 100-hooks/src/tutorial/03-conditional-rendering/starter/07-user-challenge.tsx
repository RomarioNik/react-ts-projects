import { useState } from "react";

type User = {
  name: string;
};

const UserChallenge = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (): void => {
    setUser({ name: "John" });
  };

  const logOut = (): void => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" type="button" onClick={logOut}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" type="button" onClick={login}>
            LogIn
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
