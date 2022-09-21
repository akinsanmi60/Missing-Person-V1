import styled, { keyframes } from "styled-components";

const tickerh = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-300%, 0, 0);
    }
`;

export const BreakingNews = styled.div`
  width: 100%;
  height: 36px;
  padding: 2px;
  overflow: hidden;
  p {
    margin-bottom: 9px;
    font-size: 13px;
    color: var(--dark-primary);
    line-height: 1;
  }
  z-index: 99999;
  &:active {
    color: #e8491d;
  }
  .newsbox {
    display: flex;
    animation: ${tickerh} 90s linear infinite;
    .newsitem {
      flex-shrink: 0;
      width: 100%;
      text-align: center;
      color: white;
    }
  }
`;
