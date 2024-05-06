import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { CartItemsType, type StateType } from "./types";
import { ActionKind } from "./action";
import { getTotal } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";
const { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } =
  ActionKind;

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type ValueType = {
  clearCart: () => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalAmount: number;
  totalCost: number;
} & StateType;

const initialState: StateType = {
  loading: false,
  cart: new Map(),
};

export const GlobalContext = createContext<ValueType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: LOADING, payload: true });
      const resp = await fetch(url);

      if (!resp.ok) {
        dispatch({ type: LOADING, payload: false });
        throw Error("Bed request");
      }

      const cart: CartItemsType[] = await resp.json();
      dispatch({ type: DISPLAY_ITEMS, payload: cart });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Happened";
      throw Error(message);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { totalAmount, totalCost } = getTotal(state.cart);

  const clearCart = () => dispatch({ type: CLEAR_CART });
  const remove = (id: string) => dispatch({ type: REMOVE, payload: id });
  const increase = (id: string) => dispatch({ type: INCREASE, payload: id });
  const decrease = (id: string) => dispatch({ type: DECREASE, payload: id });

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
