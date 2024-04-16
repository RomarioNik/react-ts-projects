import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <>
      <h2>toggle challenge</h2>
      {value ? <div>Component</div> : <div>Element</div>}
      <button
        className="btn"
        type="button"
        onClick={() => setValue((prev) => !prev)}
      >
        Toggle
      </button>
    </>
  );
};

export default ToggleChallenge;
