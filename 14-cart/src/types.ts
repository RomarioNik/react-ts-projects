import { ActionKind } from "./action";

export type CartItemsType = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

type DisplayAction = {
  type: ActionKind.DISPLAY_ITEMS;
  payload: CartItemsType[];
};

type LoadingAction = {
  type: ActionKind.LOADING;
  payload: boolean;
};

type ClearAction = {
  type: ActionKind.CLEAR_CART;
};

type CountAction = {
  type: ActionKind.INCREASE | ActionKind.DECREASE | ActionKind.REMOVE;
  payload: string;
};

export type ActionType =
  | DisplayAction
  | LoadingAction
  | ClearAction
  | CountAction;

export type Cart = Iterable<[string, CartItemsType]>;

export type StateType = {
  loading: boolean;
  cart: Cart;
  // cart: MapConstructor;
  // cart: Record<string, CartItemsType>;
  // cart: unknown;
};
