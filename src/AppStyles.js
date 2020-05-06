import styled from "styled-components";
import { breakpoints } from "./styles/theme";

export default styled.main`
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  padding: 30px 80px 30px;
  padding-bottom: 150px;
  position: relative;

  &:first-child {
    margin: 0;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 5px 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
  }
`;
