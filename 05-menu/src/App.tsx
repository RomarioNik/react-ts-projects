import { useState } from "react";
import { Filter } from "./Filter";
import { type Menu, menu } from "./data";
import { Card } from "./Card";
import { Title } from "./Title";

const allCategories: string[] = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

export const App = () => {
  const [cards, setCards] = useState<Menu[]>(menu);

  const filterCards = (activeCategory: string): void => {
    if (activeCategory === "all") {
      setCards(menu);
      return;
    }

    const newCards = menu.filter((card) => card.category === activeCategory);
    setCards(newCards);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <div className="btn-container">
          {menu.length > 0 &&
            allCategories.map((category) => (
              <Filter
                key={category}
                category={category}
                filterCards={filterCards}
              />
            ))}
        </div>

        <div className="section-center">
          {cards.length > 0 &&
            cards.map((card) => <Card key={card.id} {...card} />)}
        </div>
      </section>
    </main>
  );
};
export default App;
