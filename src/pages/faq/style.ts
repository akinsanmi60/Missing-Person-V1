import styled from "styled-components";

type PropQue = {
  toggle: boolean;
};

export const Wrapper = styled.div`
  padding: 0rem 4rem;
  margin-bottom: 50px;
  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 30px;
  }
  img {
    width: 100%;
    height: 350px;
  }
  @media screen and (min-width: 1186px) {
    padding: 0rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 0rem 2rem;
  }
`;

export const QuestionStyled = styled.div<PropQue>`
  background: ${props => (props.toggle ? "#0E2038" : "#F2F6FF")};
  width: 100%;
  margin: 1rem 0;
  padding: 1.8rem 2rem;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  border: 1px solid;

  p {
    color: ${props => (props.toggle ? "#F2F6FF" : "#0E2038")};
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    text-align: justify;
  }
  h4 {
    color: ${props => (props.toggle ? "#F2F6FF" : "#0E2038")};
    transition: all 0.4s ease-in-out;
    font-size: 1.3rem;
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

  @media screen and (max-width: 425px) {
    padding: 1rem 1.5rem;
    width: 100%;
    h4 {
      font-size: 16px;
    }
  }
`;
