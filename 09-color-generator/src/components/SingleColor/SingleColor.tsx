import { toast } from "react-toastify";
import { type Color } from "../../types";

type SingleColorProps = {
  color: Color;
};

export const SingleColor = ({ color }: SingleColorProps) => {
  const { hex, weight, type } = color;

  const saveToClipboard = async () => {
    if (!navigator.clipboard) {
      toast.error("Clipboard is not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Color copied to clipboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Some error. Try again";
      toast.error(message);
    }
  };

  return (
    <article
      className={type === "shade" ? "color color-light" : "color"}
      style={{
        background: `#${hex}`,
      }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
