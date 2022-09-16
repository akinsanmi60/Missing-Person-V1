import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    margin-top: 10px;
    border: 1px solid var(--dark-primary);
    gap: 20px;
    margin-bottom: 50px;
    background-color: var(--neutral-light);

    .formbox {
      flex: 6;
    }
    .userbox {
      flex: 3;
    }

    .head {
      padding: 8px;
      box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
        0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
      display: flex;
      justify-content: space-between;
      p {
        font-size: 9px;
        margin-top: 9px;
      }
      h1 {
        font-size: 17px;
        font-weight: 700;
        color: var(--dark-primary);
      }
    }

    .navbox {
      padding: 0px 18px;
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
      font-size: 13px;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      text-align: center;
      margin-top: 12px;
    }
  }
  padding: 0.5rem 4rem;
  @media screen and (min-width: 1186px) {
    padding: 0.5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 768px) {
    .container {
      padding: 10px;
      flex-direction: column-reverse;
      gap: 50px;
    }
    .userbox {
      margin-bottom: 15px;
    }
  }
`;
export default Wrapper;
