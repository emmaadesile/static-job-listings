import React from "react";
import styled from "styled-components";
import { colors } from "../styles/theme";
import Logo from "../static/images/photosnap.svg"

const StyledCard = styled.div`
  padding: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0px 5px 15px 2px rgba(91, 164, 164, 0.2);
  border-radius: 5px;
  margin-top: 25px;

  .position {
    display: flex;
    align-items: center;

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
        font-weight: 700;
        color: ${colors.black};
      }
    }
  }

  .langs {
    justify-self: end;
    font-size: 0.75em;
    color: ${colors.primary};
    font-weight: 700;
    display: flex;

    .lang {
      background: ${colors.lightGreyCyanFilter};
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 8px;
      padding-bottom: 8px;
      align-self: center;
      border-radius: 2px;
      margin-left: 15px;
    }
  }
`;

// const Logo = styled.div`
//   background-image: url(${({logo}) => logo});
//   width: 50px;
//   height: auto;
// `;

const Card = ({
  position,
  company,
  logo,
  isNew,
  isFeatured,
  postedAt,
  langs = ["HTML", "CSS", "JavaScript"],
  contract,
  location,
  level,
  role,
}) => (
  <StyledCard>
    <div className="position">
      <img src={logo} alt="companyLogo" />
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
    <div className="langs">
      <span className="lang">{role}</span>
      <span className="lang">{level}</span>
      {langs.map((lang, index) => (
        <span className="lang" key={index}>
          {lang}
        </span>
      ))}
    </div>
  </StyledCard>
);

export default Card;
