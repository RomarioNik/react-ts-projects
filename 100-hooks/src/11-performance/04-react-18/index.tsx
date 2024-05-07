import { useState, useTransition, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));

export const LatestReact = () => {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });

      setItems(newItems);
    });
  };

  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <section>
        <form className="form">
          <input
            type="text"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
        </form>
        <h4>Items Below</h4>
        {isPending ? (
          "Loading..."
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "2rem",
            }}
          >
            {items}
          </div>
        )}
        <button onClick={() => setShow(!show)} className="btn">
          toggle
        </button>
        {show && <SlowComponent />}
      </section>
    </Suspense>
  );
};
