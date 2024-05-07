import { useState, useCallback } from "react";
import { Datatype, data } from "../../data";
import { List } from "./List";

export const LowerState = () => {
  const [people, setPeople] = useState<Datatype[]>(data);
  const [count, setCount] = useState<number>(0);

  // when you use React.memo(Component) - you memorizing your function
  // but if you pass prop into memorized function - memo doesn't work
  // because function creates from scratch every re-render
  // that's why we use useCallback hook
  const removePerson = useCallback(
    (id: number) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
