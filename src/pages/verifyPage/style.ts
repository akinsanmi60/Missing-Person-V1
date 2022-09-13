import styled from "styled-components";

const VerifyWrapper = styled.div`
  background-color: var(--neutral-light);
  width: 100%;
  min-height: 100vh;
  .box {
    display: flex;
    justify-content: center;
  }
  .formcontain {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .form {
    border: 1px solid var(--dark-primary);
    max-width: 600px;
    margin-top: 50px;
    position: relative;
    z-index: 999;
    padding: 35px 30px;
    background-color: var(--neutral-light);
    -webkit-box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    -moz-box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.25);
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    margin-bottom: -20px;
  }

  h2 {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .comp-text {
    font-size: 17px;
    margin-bottom: 15px;
    color: #16194f;
    span {
      font-size: 12px;
      color: green;
    }
  }
  .action-text {
    font-size: 14px;
    margin-top: 20px;
    color: #16194f;
    span {
      font-size: 12px;
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .input-con {
    display: flex;
    justify-content: center;
  }

  Input {
    text-align: center;
    border: 1px solid var(--dark-primary);
    font-size: 18px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 19px;
    span {
      margin-left: 8px;
      margin-top: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    Input {
      width: 30vw;
    }
  }
  @media screen and (max-width: 425px) {
    .comp-text {
      text-align: center;
    }
  }
`;
export default VerifyWrapper;

export const ButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.4rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  &:disabled {
    background-color: #cccccc;
  }
  @media screen and (max-width: 425px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;
