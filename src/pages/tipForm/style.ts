import styled from "styled-components";

const TipWrapper = styled.div`
  padding: 0.5rem 4rem;
  .container {
    padding: 20px 90px;
    margin-top: 5px;
    border: 1px solid var(--dark-primary);
    margin-bottom: 50px;
    background-color: var(--neutral-light);
  }

  h1 {
    text-align: center;
    margin-bottom: 9px;
  }

  .boxA {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--dark-primary);
    margin-bottom: 12px;
  }

  label {
    font-size: 15px;
    margin-bottom: 1px;
  }

  Input,
  Select {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }
  Select option {
    padding: 0px 5px;
    background-color: var(--neutral-light);
  }

  .bio,
  .polbox {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .fullname,
  .mediacontact {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .bio,
  .polbox,
  .fullname,
  .mediacontact,
  .address-A {
    margin-bottom: 25px;
  }

  .feedbtn {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1186px) {
    padding: 0.5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (max-width: 425px) {
    .container {
      padding: 20px;
    }

    h1 {
      margin-bottom: 0px;
    }

    .boxA {
      margin-bottom: 0px;
    }

    label {
      margin-top: 19px;
    }

    .bio,
    .polbox,
    .fullname,
    .mediacontact,
    .address-A {
      gap: 0px;
      grid-template-columns: 1fr;
      margin-bottom: 0px;
    }
  }
`;
export default TipWrapper;

export const TextArea = styled.textarea`
  border: 1px solid;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--neutral-light);
  font-size: 16px;
  resize: none;
`;

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
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;
