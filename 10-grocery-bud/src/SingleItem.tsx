import { type Item } from "./types";

type SingleItemProps = {
  item: Item;
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
};

export const SingleItem = ({ item, removeItem, editItem }: SingleItemProps) => {
  const { id, name, completed } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="complete"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{ textDecoration: `${completed ? "line-through" : "none"}` }}>
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};
