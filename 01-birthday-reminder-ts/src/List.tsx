import { Person } from "./Person";
// import data from "./data";

export const List = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </ul>
  );
};
