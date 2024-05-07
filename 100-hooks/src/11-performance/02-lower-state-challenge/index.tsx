import { useState } from "react";
import { type Datatype, data } from "../../data";
import { List } from "./List";
import { Form } from "./Form";

export const LowerStateChallenge = () => {
  const [people, setPeople] = useState<Datatype[]>(data);

  const addPerson = (name: string): void => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
