import { useGlobalContext } from "./hooks";
import { FaTimes } from "react-icons/fa";

export const Modal = () => {
  const value = useGlobalContext();

  return (
    <div className={value?.isModalOpen ? "backdrop show-modal" : "backdrop"}>
      <div className="modal">
        <p>Modal Content</p>
        <button
          className="btn-close btn-modal-close"
          type="button"
          onClick={value?.closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
