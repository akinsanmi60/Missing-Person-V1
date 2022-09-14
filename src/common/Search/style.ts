import styled from "styled-components";

const SearchBox = styled.div`
  h1 {
    margin-bottom: 15px;
    font-weight: 600;
  }
  .box {
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2rem 2rem;
  }
  .boxA,
  .boxB {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* justify-items: center; */
    gap: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      margin-bottom: 10px;
    }
  }
  Input,
  Select {
    width: 100%;
    height: 40px;
    color: var(--neutral-light);
    border: none;
    border: 1px solid;
    line-height: 1em;
    font-weight: 300;
    padding: 0.125em 0.25em;
    outline: none;
  }

  Select option {
    background-color: var(--dark-primary);
  }

  .btnbox {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .text {
    display: flex;
    gap: 10px;
    .icon {
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 425px) {
    .btnbox {
      margin-top: 15px;
    }
    h1 {
      text-align: center;
    }
  }
`;
export default SearchBox;

export const inputStyles = {
  border: "none",
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
