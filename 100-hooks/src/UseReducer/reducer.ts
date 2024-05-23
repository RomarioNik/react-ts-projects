import { data } from "../data";
import { ActionKind } from "./actions";
import { type Action, type State } from "./types";

export const defaultState: State = {
  people: data,
  isLoading: false,
};

export const reducer = (state: State, action: Action): State => {
  if (action.type === ActionKind.CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === ActionKind.RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === ActionKind.REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return { ...state, people: newPeople };
  }

  // throw new Error(`No matching ${action.type}`);
  return state;
};
