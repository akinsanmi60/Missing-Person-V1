import styled from "styled-components";

const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgb(223, 227, 231);
  position: sticky;
  /* height: 50px; */
  top: 0px;
  width: 100%;
  z-index: 2;
  padding: 10px 50px;
  background: var(--neutral-light);
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
export default HeaderWrapper;

export const FooterBox = styled.div`
  font-size: 14px;
  background-color: var(--dark-primary);
  color: var(--neutral-light);
  padding: 0px 50px;
  .copyright {
    display: flex;
    justify-content: space-between;
  }
  p,
  h4 {
    margin-top: 8px;
  }

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
