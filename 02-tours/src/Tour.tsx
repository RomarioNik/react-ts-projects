import { useState } from "react";
import { type Tour } from "./types";

type TourProps = {
  tour: Tour;
  deleteTour: (id: string) => void;
};

export const TourComponent = ({ tour, deleteTour }: TourProps) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const { id, image, info, name, price } = tour;

  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>

      <div className="tour-info">
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? ` show less` : `  read more`}
          </button>
        </p>
      </div>

      <button
        className="delete-btn btn-block btn"
        type="button"
        onClick={() => deleteTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
