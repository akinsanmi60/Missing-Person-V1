import styled from "styled-components";

const HeaderBox = styled.div`
  border-bottom: 1px solid rgb(223, 227, 231);
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 2;
  padding: 0 50px;
  background: var(--neutral-light);
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
export default HeaderBox;
