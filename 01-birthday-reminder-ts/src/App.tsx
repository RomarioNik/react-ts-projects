import { useState } from "react";
import { List } from "./List";
import data from "./data";

export const App = () => {
  const [people, setPeople] = useState(data);

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
