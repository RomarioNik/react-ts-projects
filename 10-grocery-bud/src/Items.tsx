import { SingleItem } from "./SingleItem";
import { type Item } from "./types";

type ItemsProps = {
  items: Item[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
};

export const Items = ({ items, removeItem, editItem }: ItemsProps) => {
  return (
    <div className="items">
      {items.length > 0 &&
        items.map((item) => (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        ))}
    </div>
  );
};
