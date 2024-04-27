import { useState } from "react";
import { data, type Datatype } from "../data.ts";

export const UserChallenge = () => {
  const [name, setName] = useState<string>("");
  const [people, setPeople] = useState<Datatype[]>(data);

  const deletePerson = (id: number): void => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setName(value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!name) return;

    setPeople((prev) => [...prev, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <ul>
        {people.length > 0 &&
          people.map((person) => (
            <li key={person.id}>
              {person.name}
              <button
                className="btn"
                type="button"
                style={{ marginLeft: "10px" }}
                onClick={() => deletePerson(person.id)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
