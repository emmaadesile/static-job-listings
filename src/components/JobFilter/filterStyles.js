import styled from "styled-components";
import { colors, boxShadow, borderRadius } from "../../styles/theme";

export default styled.div`
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