import styled from "styled-components";

export const DivWrapper = styled.div`
  margin-bottom: 20px;

  .box {
    display: flex;
    .sideA {
      width: 70%;
    }
    .sideB {
      width: 30%;
      padding: 15px;
      h1 {
        text-align: center;
        margin-top: 50px;
        font-size: 25px;
        font-weight: 900;
      }
      p {
        text-align: justify;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 990px) {
    .box {
      flex-direction: column;
      .sideA {
        width: 100%;
      }
      .sideB {
        width: 100%;
        h1 {
          margin-top: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    .box {
      .sideA {
        img {
          height: 320px;
        }
      }
      .sideB {
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
