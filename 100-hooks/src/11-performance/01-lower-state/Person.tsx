// import { useEffect } from "react";

type PersonProps = {
  name: string;
};

export const Person = ({ name }: PersonProps) => {
  console.log("render");
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
