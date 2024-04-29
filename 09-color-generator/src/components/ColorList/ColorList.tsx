import { nanoid } from "nanoid";
import { SingleColor } from "../SingleColor";
import { type Color } from "../../types";

type ColorListProps = {
  colors: Color[];
};

export const ColorList = ({ colors }: ColorListProps) => {
  return (
    <section className="colors">
      {colors.map((item) => (
        <SingleColor key={nanoid()} color={item} />
      ))}
    </section>
  );
};
