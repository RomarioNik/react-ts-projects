import { CartItem } from "./CartItem";
// import { ActionKind } from "./action";
import { useGlobalContext } from "./hooks";
import { CartItemsType } from "./types";

export const CartContainer = () => {
  const value = useGlobalContext();

  const cartArray: [string, CartItemsType][] = Array.from(
    // value?.cart.entries()
    new Map(value?.cart).entries()
  );

  //   const countTotal = (): string => {
  //     if (cartArray.length === 0) return "0";

  //     const total = cartArray.reduce((acc, item) => {
  //       const { price, amount } = item[1];
  //       return (acc = acc + Number(price) * amount);
  //     }, 0);

  //     return String(total?.toFixed(2));
  //   };

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${value?.totalCost}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={value?.clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
