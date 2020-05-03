import React from "react";
import styled from "styled-components";
import jobs from "./data/data";
import Header from "./components/header";
import Card from "./components/card";
import { breakpoints, colors } from "./styles/theme";

const StyledLayout = styled.main`
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  margin-top: 2em;
  padding: 30px 80px;
  padding-bottom: 200px;

  @media screen and (max-width: 375px) {
    padding: 5px 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
  }
`;

function App() {
  const [filter, setfilter] = React.useState([]);
  const filterRef = React.useRef("");

  const handleFilterClick = () => {
    const filterArr = [];
    filterArr.push(filterRef.current);
    setfilter(filterArr);
    console.log(filter);
  };

  return (
    <div>
      <Header />
      <StyledLayout>
        {jobs.map((job) => (
          <Card
            key={job.id}
            position={job.position}
            logo={job.logo}
            company={job.company}
            isNew={job.new}
            isFeatured={job.featured}
            postedAt={job.postedAt}
            filters={job.languages}
            contract={job.contract}
            location={job.location}
            level={job.level}
            role={job.role}
            handleFilterClick={handleFilterClick}
            filterRef={filterRef}
          />
        ))}
      </StyledLayout>
    </div>
  );
}

export default App;
