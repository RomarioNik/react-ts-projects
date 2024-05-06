// components
import { Navbar } from "./Navbar";
import { CartContainer } from "./CartContainer";
import { useGlobalContext } from "./hooks";

export const App = () => {
  const value = useGlobalContext();

  return (
    <main>
      {value?.loading && (
        <div
          className="loading"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "99",
          }}
        ></div>
      )}

      <Navbar />
      <CartContainer />
    </main>
  );
};
