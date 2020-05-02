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
`;

function App() {
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
            langs={job.languages}
            contract={job.contract}
            location={job.location}
            level={job.level}
            role={job.role}
          />
        ))}
        <Card />
      </StyledLayout>
    </div>
  );
}

export default App;
