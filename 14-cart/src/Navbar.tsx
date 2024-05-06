import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./hooks";

export const Navbar = () => {
  const value = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{value?.totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
