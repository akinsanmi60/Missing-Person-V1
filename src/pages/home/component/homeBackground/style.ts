import styled from "styled-components";
import Slider from "react-slick";

export const DivWrapper = styled.div`
  margin-top: 2px;
  margin-bottom: 20px;
  border: 1px solid;
  .box {
    display: flex;
    .sideA {
      width: 70%;
      img {
        width: 100%;
        height: 500px;
      }
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

export const Carousel = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
  width: 100%;
  .slick-dots {
    bottom: 25px;
    text-align: right;
    padding-right: 20px;
  }
  .slick-dots li button:before {
    font-size: 10px;
    color: #f2f6ff;
  }
  .slick-next:before {
    display: none;
  }
  .slick-prev:before {
    display: none;
  }
`;
