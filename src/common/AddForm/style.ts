import styled from "styled-components";

const FormAddBox = styled.div`
  padding: 15px;
  .inputbox {
    display: flex;
  }
  .boxname,
  .personbox,
  .dropbox,
  .parentbox,
  .issue_ad,
  .policebox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  label {
    font-size: 15px;
    margin-bottom: 3px;
    color: var(--dark-primary);
  }

  p {
    font-size: 20px;
    margin-bottom: 6px;
    margin-top: 25px;
  }

  .person_ad_box,
  .parent_ad_box,
  .person_st_box {
    margin-bottom: 20px;
  }

  .person_st_box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  Input,
  Select {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }

  Select option {
    padding: 0px 5px;
    background-color: var(--neutral-light);
  }

  .payment p {
    margin-top: 4px;
    font-size: 12px;
    font-style: italic;
  }

  .payment span {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  @media screen and (max-width: 425px) {
    .boxname,
    .personbox,
    .dropbox,
    .parentbox,
    .person_st_box {
      grid-template-columns: 1fr;

      margin-bottom: 17px;
    }
  }
`;
export default FormAddBox;

export const inputStyles = {
  outline: "none",
  focusBorderColor: "none",
};

export const ButtonStyled = styled.button`
  background-color: var(--dark-primary);
  padding: 0.4rem 2rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  &:disabled {
    background-color: #cccccc;
  }
  @media screen and (max-width: 425px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

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

  label {
    font-size: 15px;
    margin-bottom: 3px;
    color: var(--dark-primary);
  }

  Input {
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    margin-bottom: 15px;
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
