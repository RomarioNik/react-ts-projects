type PersonProps = {
  name: string;
};
export const Person = ({ name }: PersonProps) => {
  console.log("render");
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
