import styled from "styled-components";

const SettingsWrapper = styled.div`
  .head {
    padding: 8px;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;
  }

  .boxsetting {
    padding: 15px;
  }

  .hero {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 15%;
    position: relative;
    border: 1px solid;
    .bg {
      width: 100%;
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
    }
  }

  .simple-info {
    display: flex;
    padding-bottom: 29px;

    .dp {
      padding-left: 30px;
    }
    .basic-info {
      margin-left: 150px;
      align-self: center;
      .guardian-name {
        font-weight: 700;
        color: var(--white);
        font-size: 18px;
        text-transform: capitalize;
      }
      .guardian-id,
      .guardian-level {
        color: var(--white);
        font-size: 13px;
        font-weight: 600;
        margin-top: 0px;
        display: flex;
        grid-gap: 10px;
      }
      .guardian-id {
        margin: 1rem 0 1.2rem 0;
      }
    }
  }

  .displaysetting {
    padding: 15px;
    margin-top: 35px;
  }

  .displayform {
    padding: 10px;
    border: 1px solid;
    .lays {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 15px;
      label {
        margin-bottom: 2px;
        font-size: 15px;
      }
    }
    .passbtn {
      margin-top: 20px;
      display: flex;
      p {
        margin-right: 10px;
        font-size: 15px;
      }
      button {
        background-color: green;
        padding: 5px;
        color: white;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
          0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        border-radius: 4px;
        font-size: 9px;
      }
    }
  }

  .btned,
  .actionBtn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6px;
  }

  .editbtn,
  .cancelbtn {
    background-color: var(--dark-primary);
    padding: 3px 13px;
    color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    font-size: 12px;
  }

  .cancelbtn {
    background-color: #b71111;
  }

  .headbox {
    display: flex;
    justify-content: space-between;
  }

  Input,
  Select {
    width: 100%;
    height: 40px;
    font-weight: 300;
    padding: 5px;
    outline: none;
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }

  Select option {
    color: var(--neutral-light);
    background-color: var(--dark-primary);
  }

  .savebtn {
    span {
      margin-left: 9px;
      margin-top: 35px;
    }
  }

  @media screen and (max-width: 425px) {
    .boxsetting {
      padding: 8px;
    }

    .hero {
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
      .hero-title {
        position: relative;
        h2 {
          font-size: 22px;
          margin-top: -40px;
          margin-bottom: 5px;
        }
      }
    }

    .simple-info {
      .dp {
        padding-left: 10px;
      }
      .basic-info {
        margin-left: 0px;
        margin-top: 10px;
        padding-left: 70px;

        .guardian-name {
          font-size: 13px;
        }
        .guardian-level {
          font-size: 13px;
        }
      }
    }

    .avatar {
      width: 60px;
      height: 60px;
    }

    .css-1e8yyfy {
      font-size: calc(2rem / 1.5);
      line-height: 8rem;
    }

    .displayform {
      padding: 10px;
      .lays {
        gap: 8px;
        grid-template-columns: 1fr;
        margin-top: 10px;
      }

      .passbtn {
        button {
          padding: 5px;
          font-size: 13px;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .simple-info {
      display: flex;
      flex-direction: column;
      padding: 0 10px 30px 10px;
    }
    .hero {
      .bg {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
    }
    .passbtn {
      flex-direction: column;
      button {
        padding: 5px;
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .simple-info {
      padding: 0 10px 30px 10px;
      .basic-info {
        margin-left: 0px;
        margin-top: 40px;
        padding-left: 0px;
      }
    }

    .hero {
      .bg {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
    }

    .avatar {
      width: 50px;
      height: 50px;
    }
    .passbtn {
      flex-direction: column;
      button {
        padding: 5px;
        font-size: 13px;
      }
    }
  }
`;
export default SettingsWrapper;

export const ModalWrapper = styled.div`
  color: var(--dark-primary);
  padding: 15px;
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  label {
    margin-bottom: 2px;
  }

  .btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  Input {
    font-size: 12px;
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
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

export const ButtonStyled = styled.button`
  background-color: #0e2038;
  padding: 5px 15px;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 11px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  margin-top: 15px;
  @media screen and (max-width: 425px) {
    padding: 5px 13px;
    font-size: 0.8rem;
  }
`;

export const ImageWrapper = styled.div`
  .bg {
    width: 100%;
    border-top-right-radius: 13px;
    border-top-left-radius: 13px;
  }

  @media screen and (max-width: 375px) {
    .bg {
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }

  @media screen and (max-width: 320px) {
    .bg {
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
`;
