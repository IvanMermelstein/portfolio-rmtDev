import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

const JobList = ({ jobItems, isLoading }) => {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {jobItems.length > 0 &&
        jobItems.map((jobItem) => (
          <JobListItem key={jobItem.id} jobItem={jobItem} />
        ))}
    </ul>
  );
};

export default JobList;
