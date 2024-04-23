import { nanoid } from "nanoid";
import { FaAngleDoubleRight } from "react-icons/fa";
import { type Job } from "./type";

type DutiesProps = Pick<Job, "duties">;

export const Duties = ({ duties }: DutiesProps) => {
  return (
    <div>
      {duties.length > 0 &&
        duties.map((duty) => {
          const id = nanoid();

          return (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
    </div>
  );
};
