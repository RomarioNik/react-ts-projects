import { Datatype } from "../../data";
import Item from "./Person";
import { memo } from "react";

type ListProps = {
  people: Datatype[];
  removePerson: (id: number) => void;
};

export const List = memo(({ people, removePerson }: ListProps) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
});
