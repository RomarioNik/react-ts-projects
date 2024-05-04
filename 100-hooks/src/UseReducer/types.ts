import { Datatype } from "../data";

export type State = {
  people: Datatype[];
  isLoading: boolean;
};

export type Action = {
  type: string;
  payload?: number;
};
