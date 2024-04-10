type PersonProps = {
  name: string;
  age: number;
  image: string;
};

export const Person = ({ name, age, image }: PersonProps): JSX.Element => {
  return (
    <li className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
};
