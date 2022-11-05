import styled from "styled-components";

const CardWrapper = styled.div`
  .card {
    margin: 0px 0px 10px 0px;
    padding: 10px 0px 20px 0px;
    border: 1px solid #eee;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;

    p {
      font-size: 15px;
      border-bottom: 1px solid blue;
    }

    .image {
      display: flex;
      justify-content: center;
    }

    .description {
      padding: 0px 20px;
    }

    img {
      width: 80%;
      height: 150px;
      background-size: contain;
      margin-bottom: 20px;
      background-position: center;
    }
  }
  @media screen and (max-width: 820px) {
    .card {
      p {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .card {
      p {
        font-size: 12px;
      }
    }
  }
`;
export default CardWrapper;
