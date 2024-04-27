import React, { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

export const OtherInputs = () => {
  const [shipping, setShipping] = useState<boolean>(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(e.target.checked);
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setFramework(e.currentTarget.value);
  };

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleSelect}
          >
            {frameworks.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
