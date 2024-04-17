import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <h2>cleanup function</h2>
      <button
        className="btn"
        type="button"
        onClick={() => setValue((prev) => !prev)}
      >
        Reverse
      </button>
      {value && <Component />}
    </>
  );
};

const Component = () => {
  useEffect(() => {
    console.log("component runs");
  }, []);
  return <div>Hello</div>;
};

export default CleanupFunction;
