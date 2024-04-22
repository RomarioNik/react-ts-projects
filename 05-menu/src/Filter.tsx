type FilterProps = {
  category: string;
  filterCards: (category: string) => void;
};

export const Filter = ({ category, filterCards }: FilterProps) => {
  return (
    <button className="btn" type="button" onClick={() => filterCards(category)}>
      {category}
    </button>
  );
};
