import styled from "styled-components";
import { colors } from "../../styles/theme";
import bgHeader from "../../static/images/bg-header-desktop.svg";
import bgHeaderMobile from "../../static/images/bg-header-mobile.svg";

export default styled.header`
  height: 150px;
  background-color: ${colors.primary};
  background-image: url(${bgHeader});
  background-size: cover;

  @media screen and (max-width: 375px) {
    background-image: url(${bgHeaderMobile});
  }
`;
