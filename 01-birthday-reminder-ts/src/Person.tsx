export const Person = ({ name, age, image }) => {
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
