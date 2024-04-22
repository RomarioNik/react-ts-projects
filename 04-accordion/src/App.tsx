import { useState } from "react";
import { Question } from "./Question";
import { questions, type QuestionType } from "./data";

export const App = () => {
  const [data] = useState<QuestionType[]>(questions);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number): void => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.length > 0 &&
          data.map((question) => (
            <Question
              key={question.id}
              activeId={activeId}
              question={question}
              toggleQuestion={toggleQuestion}
            />
          ))}
      </section>
    </main>
  );
};
