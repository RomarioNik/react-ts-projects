import { type Job } from "./type";

type BtnContainerProps = {
  jobs: Job[];
  setCurrentItem: (order: number) => void;
  currentItem: number;
};

export const BtnContainer = ({
  jobs,
  setCurrentItem,
  currentItem,
}: BtnContainerProps) => {
  return (
    <div className="btn-container">
      {jobs.length > 0 &&
        jobs.map((job, idx) => (
          <button
            key={job.id}
            type="button"
            onClick={() => setCurrentItem(idx)}
            className={idx === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        ))}
    </div>
  );
};
