import styled from "styled-components";

const RegisterWrapper = styled.div`
  background-color: var(--neutral-light);
  min-height: 100vh;

  .boxform {
    display: flex;
    justify-content: center;
  }

  .hero {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .formContainer {
    min-width: 600px;
    margin-top: 50px;
    position: relative;
    z-index: 999;
    padding: 35px 30px;
    background: rgba(255, 255, 255, 0.04);
    -webkit-box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    -moz-box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.25);
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 25%);
    margin-bottom: -20px;
  }

  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  Input {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }
  .optlogin {
    display: flex;
    justify-content: center;
    gap: 15px;
    span {
      font-size: 35px;
    }
  }

  .textopt {
    p {
      margin-top: 15px;
      text-align: center;
      font-size: 15px;
    }
  }

  label {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    span {
      margin-left: 8px;
      margin-top: 8px;
    }
  }

  .text {
    text-align: center;
    margin-top: 40px;
    font-size: 13px;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .formContainer {
      margin-bottom: 40px;
      min-width: 300px;
    }
  }
  @media screen and (max-width: 425px) {
    .form {
      grid-template-columns: 1fr;
      gap: 0px;
    }

    label {
      margin-top: 15px;
    }
    .formContainer {
      margin-top: 30px;
      margin-bottom: 40px;
    }
    .btn {
      display: flex;
      justify-content: flex-start;
      margin-top: 15px;
    }
  }
`;
export default RegisterWrapper;

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
