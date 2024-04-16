import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>useState basics</h2>
      <h3>You clicked {count} times</h3>
      <button
        className="btn"
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
