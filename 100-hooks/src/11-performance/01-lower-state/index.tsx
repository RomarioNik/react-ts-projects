import { useState } from "react";
import { type Datatype, data } from "../../data";
import { List } from "./List";
import { Counter } from "./Counter";

export const LowerState = () => {
  const [people] = useState<Datatype[]>(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
