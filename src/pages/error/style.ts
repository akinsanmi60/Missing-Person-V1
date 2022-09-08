import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    text-align: start;
    color: var(--dark-primary);
    font-size: 18px;
  }
  .container {
    padding: 20px;
    .logoimg,
    .flexgrow {
      display: flex;
      justify-content: center;
    }
  }

  .errorcontainer,
  .con-container {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
    .imgbox,
    .textcontainer,
    .writecontainer,
    .btn {
      display: flex;
      justify-content: center;
    }
    .textcontainer {
      align-items: center;
      padding: 0px 50px;
    }

    .writecontainer {
      align-items: center;
      padding: 0px;
      @media screen and (max-width: 425px) {
        margin-top: 30px;
      }
    }

    label {
      margin-bottom: 0px;
    }

    Input {
      outline: none;
      width: 100%;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid var(--dark-primary);
      margin: 5px;
      font-size: 14px;
      color: var(--dark-primary);
      &:hover {
        border: 1px solid var(--dark-primary);
      }
    }
  }
`;
export default SectionWrapper;

export const ButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.7rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    width: 50%;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
