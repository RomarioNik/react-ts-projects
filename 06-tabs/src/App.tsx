import { useState, useEffect } from "react";
import { type Job, jobSchema } from "./type";
import { BtnContainer } from "./BtnContainer";
import { JobInfo } from "./JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  console.log(jobs);

  const fetchData = async (): Promise<void> => {
    try {
      // setIsLoading(true);
      const resp = await fetch(url);
      if (!resp.ok) throw Error("Bad request...");

      const rawData: Job[] = await resp.json();

      const result = jobSchema.array().safeParse(rawData);
      if (!result.success) throw Error("Error parsing...");

      setJobs(result.data);
      setIsLoading(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unnown error";
      console.log(message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <main>
      <section className="jobs-center">
        <BtnContainer
          jobs={jobs}
          setCurrentItem={setCurrentItem}
          currentItem={currentItem}
        />
        <JobInfo job={jobs[currentItem]} />
      </section>
    </main>
  );
};
export default App;
