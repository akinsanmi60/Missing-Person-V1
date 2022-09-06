import styled from "styled-components";

const ResetContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-primary);
  .formbox {
    .titlebox {
      margin-bottom: 14px;
    }
    .title,
    .hero {
      text-align: center;
      font-size: 22px;
      font-weight: 900;
    }

    .hero {
      font-size: 22px;
    }

    .form {
      margin-bottom: 13px;
      label {
        margin-bottom: 2px;
      }
    }

    Input {
      outline: none;
      padding: 10px;
      border-radius: 6px;
      font-size: 14px;
      border: 1px solid var(--dark-primary);
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
  }
`;
export default ResetContainer;
