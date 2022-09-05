import styled from "styled-components";

const MissingWrapper = styled.div`
  .head {
    padding: 8px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
  }

  @media screen and (max-width: 425px) {
    .head {
      h1 {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;
export default MissingWrapper;
