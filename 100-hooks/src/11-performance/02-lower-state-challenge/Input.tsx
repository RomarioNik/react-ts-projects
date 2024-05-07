import { useState } from "react";

export const Input = () => {
  const [name, setName] = useState<string>("");

  return (
    <input
      type="text"
      name="name"
      id="name"
      className="form-input"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};
