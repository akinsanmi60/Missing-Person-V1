import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
`;
export default ButtonBox;

export const DrawerButton = styled.button`
  background-color: #16194f;
  padding: 0.7rem 1rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 20px;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 425px) {
    // margin-top: 5px;
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 320px) {
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;

export const IconBox = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 8px;
  font-size: 30px;
  justify-content: center;
  cursor: pointer;
`;
