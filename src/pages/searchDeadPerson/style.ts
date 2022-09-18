import styled from "styled-components";

const DeathWrapper = styled.div`
  .box {
    background: #3a6186;
    /* background: -webkit-linear-gradient(to right, #89253e, #3a6186); */
    background: linear-gradient(to right, #89253e, #3a6186);
    color: var(--neutral-light);
    padding: 40px 60px;
  }

  @media screen and (max-width: 375px) {
    .box {
      padding: 20px;
    }
  }
`;
export default DeathWrapper;
