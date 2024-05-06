import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { CartItemsType } from "./types";
import { useGlobalContext } from "./hooks";

type CartItemProps = CartItemsType;

export const CartItem = ({ id, img, title, price, amount }: CartItemProps) => {
  const value = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => value?.remove(id)}>
          remove
        </button>
      </div>

      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => value?.increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => value?.decrease(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};
