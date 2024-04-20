import { useState } from "react";
import { reviews } from "./data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "./Button";
import { Pearson } from "./Pearson";

export const App = () => {
  const [index, setIndex] = useState(0);

  // 1 % 4 === 1
  // 2 % 4 === 2
  // 3 % 4 === 3
  // 4 % 4 === 0

  const nextPerson = () => {
    setIndex((index) => {
      const newValue = (index + 1) % reviews.length;
      return newValue;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + reviews.length) % reviews.length;
      return newValue;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    const newIndex = randomNumber % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <Pearson pearson={reviews[index]} />
        <div className="btn-container">
          <Button className="prev-btn" func={prevPerson}>
            <AiOutlineLeft />
          </Button>
          <Button className="next-btn" func={nextPerson}>
            <AiOutlineRight />
          </Button>
        </div>

        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
