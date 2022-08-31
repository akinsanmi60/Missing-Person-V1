import styled from "styled-components";

const OuterLayout = styled.section`
  padding: 2rem 4rem;
  @media screen and (min-width: 1186px) {
    padding: 2rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 1rem 2rem;
  }
`;
export default OuterLayout;
export const InnerLayout = styled.section`
  padding: 2rem 0;
`;
