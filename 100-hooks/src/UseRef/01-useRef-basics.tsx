import { useEffect, useRef, useState } from "react";

export const UseRefBasics = () => {
  const [value, setValue] = useState<number>(0);
  const refContainer = useRef<HTMLInputElement>(null);
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    refContainer.current?.focus();
    if (!isMounted.current) return;
    console.log(isMounted);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = refContainer.current?.value;
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h1>value : {value}</h1>

      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};
