import React from "react";

const UseStateGotcha = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleClick = (): void => {
    setValue((prev) => {
      const newValue = prev + 1;
      console.log(newValue);
      return newValue;
    });
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
