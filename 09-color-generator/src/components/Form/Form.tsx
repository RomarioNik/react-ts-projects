import { useState } from "react";

type FormProps = {
  addColor: (color: string) => void;
};

export const Form = ({ addColor }: FormProps) => {
  const [color, setColor] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color || "#f15025"}
          onChange={handleChange}
        />

        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />

        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
