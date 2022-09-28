import styled from "styled-components";

type PropQue = {
  toggle: boolean;
};

export const Wrapper = styled.div`
  padding: 10px;
  .box {
    gap: 40px;
    display: flex;
    .text {
      width: 40%;
      h2,
      h3 {
        font-size: 38px;
        line-height: 1;
        font-weight: 900;
      }
      h2 {
        margin-top: 20px;
        margin-bottom: 13px;
      }
    }
    .que {
      width: 55%;
    }
  }

  @media screen and (max-width: 768px) {
    .box {
      gap: 30px;
    }
  }
  @media screen and (max-width: 425px) {
    .box {
      gap: 8px;
      flex-direction: column;
      .que,
      .text {
        width: 100%;
      }
      .text {
        h2,
        h3 {
          font-size: 28px;
          text-align: center;
        }
      }
    }
  }
`;

export const HomeFqaStyled = styled.div<PropQue>`
  background: ${props => (props.toggle ? "#0E2038" : "#F2F6FF")};
  width: 90%;
  margin: 12px 0;
  padding: 1.8rem 2rem;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  border: 1px solid;

  p {
    color: ${props => (props.toggle ? "#F2F6FF" : "#0E2038")};
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    text-align: justify;
    font-size: 16px;
  }
  h4 {
    color: ${props => (props.toggle ? "#F2F6FF" : "#0E2038")};
    transition: all 0.4s ease-in-out;
    font-size: 18px;
    margin-bottom: 12px;
  }
  .toggle-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    .click {
      color: ${props => (props.toggle ? "#F2F6FF" : "#0E2038")};
      outline: none;
      cursor: pointer;
      border: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 1rem;
    width: 100%;
    h4 {
      font-size: 16px;
    }
  }
`;
