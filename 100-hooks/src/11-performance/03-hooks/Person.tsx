type PersonProps = {
  id: number;
  name: string;
  removePerson: (id: number) => void;
};

const Person = ({ id, name, removePerson }: PersonProps) => {
  return (
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
