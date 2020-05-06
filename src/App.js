import React from "react";
import jobs from "./data/data";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Filter from "./components/JobFilter";
import StyledLayout from "./AppStyles";

function App() {
  const [filters, setFilters] = React.useState([]);
  const [jobListings, setJobListings] = React.useState(jobs);
  const removeFilterRef = React.useRef();

  React.useEffect(() => {
    // this shows jobs that match the selected filters
    const filteredJobs = (jobs) => {
      // eslint-disable-next-line array-callback-return
      return jobs.filter((job) => {
        for (let i = 0; i < filters.length; i++) {
          const filterItem = filters[i];
          if (
            job.role === filterItem ||
            job.level === filterItem ||
            (job.languages && job.languages.includes(filterItem)) ||
            (job.tools && job.tools.includes(filterItem))
          ) {
            return job;
          }
        }
      });
    };

    if (filters.length > 0) {
      setJobListings(filteredJobs(jobs));
    } else {
      setJobListings(jobs);
    }
  }, [filters]);

  // remove a filter
  const handleRemoveFilter = (e) => {
    const currentFilter =
      removeFilterRef.current.parentElement.firstElementChild.innerText;
    setFilters(filters.filter((item) => item !== currentFilter));
  };

  // clear all filters
  const handleClearFilter = () => {
    setFilters([]);
  };

  // add a filter
  const handleFilterClick = (e) => {
    const item = e.target.innerText;
    if (filters.includes(item)) return;
    else {
      setFilters(filters.concat(item));
    }
  };

  return (
    <div>
      <Header />
      <StyledLayout>
        {filters.length > 0 && (
          <Filter
            filters={filters}
            handleRemoveFilter={handleRemoveFilter}
            handleClearFilter={handleClearFilter}
            removeFilterRef={removeFilterRef}
          />
        )}
        {jobListings.map((job) => (
          <JobCard
            key={job.id}
            position={job.position}
            logo={job.logo}
            company={job.company}
            isNew={job.new}
            isFeatured={job.featured}
            postedAt={job.postedAt}
            langs={job.languages}
            contract={job.contract}
            location={job.location}
            level={job.level}
            tools={job.tools}
            role={job.role}
            filters={filters}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </StyledLayout>
    </div>
  );
}

export default App;
