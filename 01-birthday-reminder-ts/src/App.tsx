import { useState } from "react";
import { List } from "./List";
import data from "./data";

export interface IPeople {
  id: number;
  name: string;
  age: number;
  image: string;
}

export const App = (): JSX.Element => {
  const [people, setPeople] = useState<IPeople[]>(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        <List people={people} />

        <button onClick={handleClick}>Clear all</button>
      </section>
    </main>
  );
};
