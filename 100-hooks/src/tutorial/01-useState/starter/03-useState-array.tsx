import { useState } from "react";
import { data } from "../../../data";
import { type Datatype } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState<Datatype[]>(data);

  const removePerson = (id: number): void => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const resetList = (): void => {
    setPeople([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      <div>
        {people.map(({ id, name }: Datatype) => (
          <h4 key={id}>
            {name}
            <button
              className="btn"
              type="button"
              onClick={() => removePerson(id)}
            >
              delete
            </button>
          </h4>
        ))}
      </div>

      <button className="btn" type="button" onClick={resetList}>
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
