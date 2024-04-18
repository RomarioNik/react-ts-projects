import { useState, useEffect } from "react";
import { TourComponent } from "./Tour";
import { Tour, tourSchema } from "./types";

const url = "https://www.course-api.com/react-tours-project";

export const App = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTuors = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      if (!resp.ok) throw Error("Bad request");

      const rawData = await resp.json();
      const result = tourSchema.array().safeParse(rawData);

      if (!result.success) throw Error("Faild to pars tours");

      setTours(result.data);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Somth happend";
      console.log(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTuors();
  }, []);

  const updateTourList = () => {
    fetchTuors();
  };

  const deleteTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) <h2>Loading...</h2>;

  return (
    <main>
      {tours.length === 0 && (
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" onClick={updateTourList}>
            Update
          </button>
        </div>
      )}

      {tours.length > 0 && (
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
