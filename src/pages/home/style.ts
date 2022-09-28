import styled from "styled-components";

const HomeWrapper = styled.div`
  .seen {
    margin-bottom: 40px;
    h1 {
      font-size: 25px;
      text-align: center;
      margin-bottom: 12px;
      font-weight: 900;
    }
  }

  .display {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 8px;
  }

  @media screen and (min-width: 1025px) {
    .display {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .display {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 425px) {
    .display {
      grid-template-columns: 1fr 1fr;
    }

    .card {
      padding: 10px;
    }

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 375px) {
    .display {
      padding: 0px 13px;
      grid-template-columns: 1fr;
    }
  }
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
