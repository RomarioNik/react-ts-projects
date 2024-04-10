import { Person } from "./Person";
import { IPeople } from "./App";

type ListProps = {
  people: IPeople[];
};

export const List = ({ people }: ListProps): JSX.Element => {
  return (
    <ul>
      {people.map((person: IPeople) => {
        return <Person key={person.id} {...person} />;
      })}
    </ul>
  );
};
