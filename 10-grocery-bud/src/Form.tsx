import { useState } from "react";
import { toast } from "react-toastify";

type FormProps = {
  addItem: (name: string) => void;
};

export const Form = ({ addItem }: FormProps) => {
  const [newItemName, setNewItemName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please provide a value");
      return;
    }

    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>

      <div className="form-control">
        <input
          className="form-input"
          type="text"
          name="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
