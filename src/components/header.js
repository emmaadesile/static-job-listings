import React from "react";
import styled from "styled-components";
import { colors } from "../styles/theme";
import bgHeader from "../static/images/bg-header-desktop.svg";

const StyledHeader = styled.header`
  height: 200px;
  background-color: ${colors.darkGreyCyan};
  background-image: url(${bgHeader});
  background-size: cover;
`;

const Header = () => <StyledHeader />;

export default Header;
