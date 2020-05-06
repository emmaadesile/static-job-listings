import React from "react";
import styled from "styled-components";
import { colors, boxShadow, borderRadius, borderLeft } from "../styles/theme";

const StyledCard = styled.div`
  padding: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${colors.white};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  margin-top: 30px;
  border-left: ${(props) => (props.isFeatured ? borderLeft : "none")};
  position: relative;

  .position {
    display: flex;
    align-items: center;
    position: relative;

    .position-info {
      margin-left: 20px;

      .top-info {
        color: ${colors.primary};
        font-size: 12px;
        font-weight: 700;

        & > span {
          margin-right: 10px;
          font-size: 11px;
        }

        & > span:not(.company) {
          padding: 5px 11px;
          padding-top: 8px;
          border-radius: 12px;
          text-transform: uppercase;
        }

        .new {
          color: ${colors.white};
          background: ${colors.primary};
        }

        .featured {
          background: ${colors.black};
          color: ${colors.white};
        }
      }

      .bottom-info {
        display: flex;
        color: ${colors.darkGreyCyan};
        font-size: 13px;
        position: relative;

        & > span {
          margin-right: 10px;
        }

        & > span:not(.postedAt)::before {
          content: ".";
          margin-right: 10px;
          align-self: center;
        }
      }

      .position-title {
        font-size: 17px;
        font-weight: 700;
        color: ${colors.black};
      }
    }
  }

  .filters {
    justify-self: end;
    font-size: 13px;
    color: ${colors.primary};
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;

    .filter {
      background: ${colors.lightGreyCyanFilter};
      padding: 8px 12px;
      align-self: center;
      border-radius: 2px;
      margin-left: 15px;
      margin-top: 15px;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background: ${colors.primary};
        color: ${colors.white};
      }
    }
  }

  @media screen and (max-width: 850px) {
    padding: 20px 10px;
    grid-template-columns: 2fr 1fr;

    .filter {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 20px 10px;
    grid-template-columns: 1fr;
    justify-self: start;

    .filters {
      width: 100%;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid ${colors.grey};

      .filter {
        margin-top: 15px;
      }
    }
  }
  @media all and (max-width: 480px), (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 20px 5px;
    padding-top: 40px;
    margin-bottom: 40px;
    font-size: 14px;

    .logo {
      position: absolute;
      bottom: 120%;
      left: 15px;
      width: 50px;
      height: auto;
    }
  }
`;

const Card = ({
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
    <StyledCard isFeatured={isFeatured}>
      <div className="position">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
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
    </StyledCard>
  );
};

export default Card;
