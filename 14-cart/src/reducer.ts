import { ActionKind } from "./action";
import { type ActionType, type StateType } from "./types";

const { REMOVE, INCREASE, DECREASE, CLEAR_CART, LOADING, DISPLAY_ITEMS } =
  ActionKind;

export const reducer = (state: StateType, action: ActionType): StateType => {
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const id = action.payload;
    const newCart = new Map(state.cart);
    const item = newCart.get(id);

    if (!item) return { ...state };

    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const id = action.payload;
    const newCart = new Map(state.cart);
    const item = newCart.get(id);

    if (!item || item.amount === 1) return { ...state };

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === LOADING) {
    return { ...state, loading: action.payload };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.map((item) => [item.id, item]));
    return { ...state, cart: newCart };
  }

  const unhandledActionType = action;
  throw new Error(`Unexpected action type ${unhandledActionType}`);

  //   return state;
};
