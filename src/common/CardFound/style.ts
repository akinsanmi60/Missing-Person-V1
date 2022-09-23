import styled from "styled-components";

const CardFound = styled.div`
  .card {
    padding: 10px;
    border-top: 1px solid;

    .cardbox {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 10px;
    }

    .box {
      display: flex;
      gap: 10px;
    }

    .image {
      border: 1px solid;
    }

    p {
      font-size: 15px;
    }

    .image,
    .description {
      display: flex;
      justify-content: center;
    }

    .details {
      padding: 10px;
    }

    img {
      height: 150px;
      background-size: contain;
      margin-bottom: 5px;
      background-position: center;
    }
  }
  @media screen and (max-width: 990px) {
    .card {
      .cardbox {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .card {
      .cardbox {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .card {
      padding: 10px 0px;
      .details {
        padding: 3px;
      }
    }
  }
`;
export default CardFound;
