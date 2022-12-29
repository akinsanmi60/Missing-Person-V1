import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100vw;
    height: 420px;
  }

  .slides-active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  .all-dots {
    width: 100%;
    position: absolute;
    display: flex;
    top: 90%;
    justify-content: center;
    /* z-index: 200; */
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0px 3px;
    background-color: blue;
    /* background-color: rgba(0, 0, 0, 0.3); */
    border-radius: 50%;
    display: inline-block;
  }

  .slider-container:hover .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .slider-container:hover .dot {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .slider-container:hover .active-dot {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
