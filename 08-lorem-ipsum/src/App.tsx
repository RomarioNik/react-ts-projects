import { useState } from "react";
import { text } from "./data";

export const App = () => {
  const [count, setCount] = useState<number>(1);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParagraphs(text.slice(0, count));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h4>Lorem Ipsum Creator</h4>
      <form className="lorem-form">
        <label htmlFor="number">Paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          value={count}
          onChange={handleChange}
          min={1}
          max={text.length - 1}
          step={1}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {paragraphs.map((item, index) => (
          <p key={index} style={{ marginBottom: "10px" }}>
            {item}
          </p>
        ))}
      </article>
    </section>
  );
};
