import styled from "styled-components";

const LetterWrapper = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 800;
    margin-top: 40px;
  }
  p {
    font-size: 16px;
    margin-top: 20px;
  }
  .container {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
  }

  .formfield {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  Input {
    width: 100%;
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover,
    &:focus,
    &:active {
      outline: none;
      border: 1px solid var(--dark-primary);
    }
  }

  .btn {
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
    margin-top: 10px;
    &:disabled {
      background-color: #cccccc;
    }
  }

  span {
    margin-top: 15px;
    margin-left: 10px;
  }
  @media screen and (max-width: 425px) {
    .container {
      flex-direction: column-reverse;
      padding: 10px;
    }

    h1 {
      margin-top: -10px;
      text-align: center;
      margin-bottom: -9px;
    }

    Input {
      width: 100%;
      margin-bottom: 5px;
    }

    .formfield {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .btn {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      max-width: 46%;
    }
  }
`;
export default LetterWrapper;
