import { Datatype } from "../../data";
import { Person } from "./Person";

type ListProps = {
  people: Datatype[];
};

export const List = ({ people }: ListProps) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
