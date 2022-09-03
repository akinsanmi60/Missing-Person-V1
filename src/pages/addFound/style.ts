import styled from "styled-components";

const FoundWrapper = styled.div`
  .head {
    padding: 8px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
  }
`;
export default FoundWrapper;
export const inputStyles = {
  //   border: "none",
  outline: "none",
  focusBorderColor: "none",
};

export const ButtonStyled = styled.button`
  background-color: #0e2038;
  padding: 0.7rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  @media screen and (max-width: 425px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;
