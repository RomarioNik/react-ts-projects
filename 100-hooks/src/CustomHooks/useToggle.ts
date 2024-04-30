import { useState } from "react";

type Toggle = {
  show: boolean;
  toggle: () => void;
};

export const useToggle = (defaultValue: boolean): Toggle => {
  const [show, setShow] = useState(defaultValue);

  const toggle = (): void => {
    setShow((prev) => !prev);
  };

  return { show, toggle };
};
