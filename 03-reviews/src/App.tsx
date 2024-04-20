import { useState } from "react";
import { reviews } from "./data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "./Button";
import { Pearson } from "./Pearson";

export const App = () => {
  const [activePerson, setActivePerson] = useState<number>(0);

  const checkNumber = (number: number): number => {
    if (number < 0) {
      return reviews.length - 1;
    }

    if (number > reviews.length - 1) {
      return 0;
    }

    return number;
  };

  const turnLeft = () => {
    setActivePerson(checkNumber(activePerson - 1));
  };

  const turnRight = () => {
    setActivePerson(checkNumber(activePerson + 1));
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === activePerson) random = activePerson + 1;
    setActivePerson(checkNumber(random));
  };

  return (
    <main>
      <article className="review">
        <Pearson pearson={reviews[activePerson]} />
        <div className="btn-container">
          <Button className="prev-btn" func={turnLeft}>
            <AiOutlineLeft />
          </Button>
          <Button className="next-btn" func={turnRight}>
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
