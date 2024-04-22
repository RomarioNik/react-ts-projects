import { type Menu } from "./data";

type CardProps = Omit<Menu, "id">;

export const Card = ({ title, price, img, desc }: CardProps) => {
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
