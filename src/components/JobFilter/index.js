import React from "react";
import { colors } from "../../styles/theme";
import StyledContainer from "./filterStyles";

const Filter = ({
  filters,
  handleRemoveFilter,
  removeFilterRef,
  handleClearFilter,
}) => (
  <StyledContainer>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filters.map((filter, index) => (
        <div className="filter" key={index}>
          <div className="filter-name">{filter}</div>
          <div
            className="removeIcon"
            onClick={handleRemoveFilter}
            ref={removeFilterRef}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                fill={colors.white}
                fillRule="evenodd"
                d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
    <div className="clear" onClick={handleClearFilter}>
      <p>Clear</p>
    </div>
  </StyledContainer>
);

export default Filter;
