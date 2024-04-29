import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { Items } from "./Items";
import { type Item } from "./types";
import { Form } from "./Form";

const saveToLocalStorage = (items: Item[]): void => {
  localStorage.setItem("grocery", JSON.stringify(items));
};

// const getFromLocalStorage = () => {
//   const items = localStorage.getItem("grocery");

//   if (items) {
//     return JSON.parse(items);
//   }

//   return [];
// };

const defaultItems = JSON.parse(localStorage.getItem("grocery") || "[]");

export const App = () => {
  // const [items, setItems] = useState<Item[]>(getFromLocalStorage());
  const [items, setItems] = useState<Item[]>(defaultItems);

  const addItem = (name: string) => {
    const newItem: Item = {
      id: nanoid(),
      name: name,
      completed: false,
    };

    setItems((prev) => {
      const newItems = [...prev, newItem];
      saveToLocalStorage(newItems);
      return newItems;
    });

    toast.success("Item added successfully");
  };

  const editItem = (id: string): void => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setItems(() => {
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const removeItem = (id: string): void => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
    saveToLocalStorage(newItems);
    toast.success("Item removed successfully");
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-right" />
    </section>
  );
};
