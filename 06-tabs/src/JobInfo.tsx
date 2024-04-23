import { Duties } from "./Duties";
import { type Job } from "./type";

type JobInfoProps = {
  job: Job;
};

export const JobInfo = ({ job }: JobInfoProps) => {
  const { company, dates, duties, title } = job;

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
