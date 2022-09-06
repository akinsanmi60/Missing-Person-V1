import styled from "styled-components";

export const ModalWrapper = styled.div`
  color: var(--dark-primary);
  padding: 15px;
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    font-size: 15px;
    margin-bottom: 22px;
  }

  Input {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }

  .btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .reset_btn {
    outline: none;
    padding: 8px 0;
    background-color: var(--dark-primary);
    color: white;
    border-radius: 5px;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;
