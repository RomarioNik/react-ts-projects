import { useGlobalContext } from "./hooks";
import { FaBars } from "react-icons/fa";

export const Home = () => {
  const value = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        type="button"
        onClick={value?.openSidebar}
      >
        <FaBars />
      </button>

      <div className="modal-btn-container">
        <button className="btn" type="button" onClick={value?.openModal}>
          Show Modal
        </button>
      </div>
    </main>
  );
};
