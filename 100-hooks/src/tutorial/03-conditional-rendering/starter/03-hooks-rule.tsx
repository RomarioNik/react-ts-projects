import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState<boolean>(true);

  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  useEffect(() => {
    console.log("hello there");
    setCondition(true);
  }, []);
  return <h2>example</h2>;

  if (condition) {
    return <h2>Hello There</h2>;
  }
};

export default Example;
