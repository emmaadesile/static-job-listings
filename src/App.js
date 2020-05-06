import React from "react";
import styled from "styled-components";
import jobs from "./data/data";
import Header from "./components/header";
import Card from "./components/card";
import Filter from "./components/filter";
import { breakpoints } from "./styles/theme";

const StyledLayout = styled.main`
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  padding: 30px 80px 30px;
  padding-bottom: 150px;
  position: relative;

  &:first-child {
    margin: 0;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 5px 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
  }
`;

function App() {
  const [filters, setFilters] = React.useState([]);
  const [jobListings, setJobListings] = React.useState(jobs);
  const removeFilterRef = React.useRef();

  React.useEffect(() => {
    // this shows jobs that match the selected filters
    const filteredJobs = (jobs) => {
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
          <Card
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
