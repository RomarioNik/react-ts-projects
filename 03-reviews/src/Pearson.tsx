import { type IReviews } from "./data";

type PearsonProps = {
  pearson: IReviews;
};

export const Pearson = ({ pearson }: PearsonProps) => {
  const { name, job, image, text } = pearson;
  return (
    <div>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
};
