import { TourComponent } from "./Tour";
import { Tour, fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

export const App = () => {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  const updateTourList = () => {
    // fetchTuors();
  };

  const deleteTour = (id: string) => {
    // const newTours = tours.filter((tour) => tour.id !== id);
    // setTours(newTours);
    console.log(id);
  };

  if (isPending) <h2>Loading...</h2>;

  if (isError) <h2>{error.message}</h2>;

  return (
    <main>
      {tours?.length === 0 && (
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" onClick={updateTourList}>
            Update
          </button>
        </div>
      )}

      {tours && (
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="title-underline"></div>
          </div>

          <div className="tours">
            {tours.map((tour: Tour) => (
              <TourComponent
                key={tour.id}
                tour={tour}
                deleteTour={deleteTour}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
