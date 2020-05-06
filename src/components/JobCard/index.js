import React from "react";
import StyledJobCard from "./jobCardStyles";

const JobCard = ({
  position,
  company,
  logo,
  isNew,
  isFeatured,
  postedAt,
  langs = "",
  contract,
  location,
  level,
  role,
  tools = "",
  filters,
  handleFilterClick,
}) => {
  const allFilters = [role, level, ...tools].concat(langs);

  return (
    <StyledJobCard isFeatured={isFeatured}>
      <div className="position">
        <img className="logo" src={logo} alt="logo" />
        <div className="position-info">
          <div className="top-info">
            <span className="company">{company}</span>
            {isNew && <span className="new">New!</span>}
            {isFeatured && <span className="featured">Featured</span>}
          </div>
          <p className="position-title">{position} </p>
          <div className="bottom-info">
            <span className="postedAt">{postedAt}</span>
            <span className="contract">{contract}</span>
            <span className="location">{location}</span>
          </div>
        </div>
      </div>
      <div className="filters">
        {allFilters.map(
          (filter, index) =>
            filter !== "" && (
              <span key={index} className="filter" onClick={handleFilterClick}>
                {filter}
              </span>
            )
        )}
      </div>
    </StyledJobCard>
  );
};

export default JobCard;
