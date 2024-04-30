import JobListItem from "./JobListItem";

const JobList = ({ jobItems }) => {
  return (
    <ul className="job-list">
      {jobItems.length > 0 &&
        jobItems.map((jobItem) => (
          <JobListItem key={jobItem.id} jobItem={jobItem} />
        ))}
    </ul>
  );
};

export default JobList;
