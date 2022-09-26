import styled from "styled-components";

const HomeWrapper = styled.div`
  /* background: yellowgreen; */
`;
export default HomeWrapper;
export const InnerWrapper = styled.div`
  padding: 0.5rem 4rem;
  @media screen and (min-width: 1186px) {
    padding: 0.5rem 6rem;
  }
  @media screen and (max-width: 990px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0.5rem 1rem;
  }
`;
