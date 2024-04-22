import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionType } from "./data";

type QuestionProps = {
  activeId: number | null;
  question: QuestionType;
  toggleQuestion: (id: number) => void;
};

export const Question = ({
  activeId,
  question,
  toggleQuestion,
}: QuestionProps) => {
  const { id, title, info } = question;
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h2>{title}</h2>
        <button
          className="question-btn"
          type="button"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
