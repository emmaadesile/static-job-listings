import React from "react";
import styled from "styled-components";
import { colors, boxShadow, borderRadius } from "../styles/theme";

const StyledContainer = styled.div`
  padding: 10px 35px;
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  background: ${colors.white};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  border-left: ${(props) =>
    props.isFeatured ? "4px solid hsl(180, 29%, 50%)" : "none"};
  transform: translateY(-70px);

  .clear {
    margin-top: 15px;
    color: ${colors.grey};
    font-weight: 700;
    font-size: 13px;
    justify-self: end;
    cursor: pointer;
    transition: color 300ms ease-in-out;

    &:hover {
      color: ${colors.black};
    }
  }

  .filter {
    background: ${colors.lightGreyCyanFilter};
    align-self: center;
    border-radius: 2px;
    margin-right: 15px;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: ${borderRadius};
    margin-right: 10px;

    .filter-name {
      padding: 8px 12px;
      font-weight: 700;
      font-size: 14px;
      color: ${colors.primary};
    }

    .removeIcon {
      background-color: ${colors.primary};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      transition: background-color 300ms ease-in-out;

      &:hover,
      &:active,
      &:focus {
        background-color: ${colors.black};
      }
    }
  }
`;

const Filter = ({ filters , handleRemoveFilter, removeFilterRef, handleClearFilter}) => (
  <StyledContainer>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filters.map((filter, index) => (
        <div className="filter" key={index}>
          <div className="filter-name">{filter}</div>
          <div className="removeIcon" onClick={handleRemoveFilter} ref={removeFilterRef}>
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
