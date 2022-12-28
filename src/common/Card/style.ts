import styled from "styled-components";

const CardWrapper = styled.div`
  .card {
    margin: 0px 0px 15px 0px;
    /* padding: 10px 0px 20px 0px; */
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
      padding: 20px;
      position: relative;
    }

    img {
      width: 90%;
      height: 150px;
      background-size: contain;
      background-position: center;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(56, 1, 56, 0.5);
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: 0.5s ease;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .description:hover .overlay {
      height: 100%;
    }

    .btnbox {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 80px;
      color: white;
      font-size: 20px;
    }

    .btn {
      background-color: white;
      padding: 9px;
      color: #0e2038;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      outline: none;
      border: none;
      cursor: pointer;
      font-weight: 200;
      font-size: 12px;
      line-height: 1.75;
      text-transform: uppercase;
      width: 50%;
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
