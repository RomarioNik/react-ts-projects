import { type Cart } from "./types";

export const getTotal = (
  cart: Cart
): { totalAmount: number; totalCost: number } => {
  let totalAmount = 0;
  let totalCost = 0;

  for (const { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += price * amount;
  }

  totalCost.toFixed(2);

  return { totalAmount, totalCost };
};
