import styled from "styled-components";

const ButtonSection = styled.div`
  border: 1px solid var(--dark-primary);
  background-color: var(--neutral-light);
  .box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .boxA {
    padding: 15px;
    border-right: 1px solid;
  }
  .boxB {
    padding: 15px;
    border-right: 1px solid;
  }
  .boxC {
    padding: 15px;
  }

  .pbox {
    background-color: var(--dark-primary);
    padding: 10px 20px;
    color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    text-align: center;
    margin-top: 12px;
  }

  @media screen and (max-width: 768px) {
    .box {
      grid-template-columns: 1fr;
    }
    .boxB,
    .boxA,
    .boxC {
      padding: 20px;
    }
    .boxB,
    .boxA {
      border-right: 0px;
    }
    .pbox {
      font-size: 10px;
    }
  }
`;
export default ButtonSection;
