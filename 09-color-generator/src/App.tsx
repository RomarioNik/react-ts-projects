import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { ColorList } from "./components/ColorList";
import { Form } from "./components/Form";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color: string) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something happens";
      toast.error(message);
    }
  };

  return (
    <main>
      <h2>Color Generator Starter</h2>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-right" />
    </main>
  );
};
export default App;
