import { useState } from "react";

type PersonType = {
  name: string;
  age: number;
  hobby: string;
};

const UseStateObject = () => {
  const [person, setPerson] = useState<PersonType>({
    name: "Peter",
    age: 24,
    hobby: "Read books",
  });

  const showPerson = (): void => {
    setPerson({
      name: "John",
      age: 28,
      hobby: "cream at the computer",
    });
  };

  return (
    <>
      <h2>useState object example</h2>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>Enjoys to: {person.hobby}</h3>

        <button className="btn" type="button" onClick={showPerson}>
          Show John
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
