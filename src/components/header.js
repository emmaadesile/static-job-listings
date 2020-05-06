import React from "react";
import styled from "styled-components";
import { colors } from "../styles/theme";
import bgHeader from "../static/images/bg-header-desktop.svg";

const StyledHeader = styled.header`
  height: 150px;
  background-color: ${colors.primary};
  background-image: url(${bgHeader});
  background-size: cover;

  @media screen and (max-width: 375px) {
    background-image: url() "../static/images/bg-header-mobile.svg";
  }
`;

const Header = () => <StyledHeader />;

export default Header;
