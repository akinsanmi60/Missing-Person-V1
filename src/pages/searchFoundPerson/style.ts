import styled from "styled-components";

const IdentifiedWrapper = styled.div`
  padding: 0.5rem 4rem;
  .container {
    padding: 15px;
    margin-top: 10px;
    border: 1px solid var(--dark-primary);
    margin-bottom: 50px;
    background-color: var(--neutral-light);

    h1 {
      font-size: 25px;
      font-weight: 700;
      color: var(--dark-primary);
    }
    .select-btn {
      display: flex;
      justify-content: center;
    }

    .statehandle {
      min-height: 60vh;
      display: flex;
      justify-content: center;
      align-content: center;
      margin-top: 90px;
      .err_img {
        position: center;
        width: 100%;
        height: 250px;
      }
      p {
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }
  @media screen and (min-width: 1186px) {
    padding: 0.5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 0.5rem 2rem;
  }
`;
export default IdentifiedWrapper;
