import styled from "styled-components";

const ContactWrapper = styled.div`
  padding: 0rem 4rem;
  margin-bottom: 50px;

  .faqtitle {
    margin-top: 35px;
    h1,
    p {
      color: var(--dark-primary);
      text-align: center;
    }
  }

  h1,
  h2 {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  h2 {
    text-align: center;
  }

  .boxcontact {
    display: flex;
    margin-top: 30px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .contact_icon {
    margin-top: 28px;
  }

  .box_icon {
    display: flex;
    gap: 23px;
    margin-bottom: 15px;
    p {
      font-size: 16px;
    }
  }

  .Fa {
    font-size: 23px;
  }

  .sideA {
    flex: 4;
    background-color: var(--dark-primary);
    padding: 30px;
    color: var(--neutral-light);
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
  }

  .sideB {
    flex: 7;
    padding: 30px;
  }

  .covered {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  label {
    font-size: 15px;
    margin-bottom: 3px;
    color: var(--dark-primary);
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

  .area {
    margin-top: 12px;
  }

  .feedbtn {
    display: flex;
    justify-content: center;
    span {
      margin-left: 9px;
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .boxcontact {
      border-top-right-radius: 13px;
      flex-direction: column;
    }
    .covered {
      gap: 10px;
    }
    .sideA,
    .sideB {
      padding: 20px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 0rem 2rem;

    .boxcontact {
      flex-direction: column;
      gap: 50px;
    }

    .covered {
      grid-template-columns: 1fr;
    }

    .sideA {
      padding: 10px;
    }

    .sideB {
      padding: 10px;
    }
  }
`;
export default ContactWrapper;

export const IconBox = styled.div`
  margin-top: 160px;
  display: flex;
  gap: 8px;
  font-size: 30px;
  justify-content: center;
  cursor: pointer;
`;

export const InnerLayout = styled.section`
  padding: 0 5rem;
  .faqtitle {
    font-size: 28px;
    margin-bottom: -10px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
    @media screen and (max-width: 375px) {
      margin-top: 30px;
      font-size: 16px;
    }

    h1 {
      font-size: 26px;
      font-weight: 700;
      @media screen and (min-width: 1025px) {
        font-size: 35px;
      }
      @media screen and (max-width: 425px) {
        font-size: 22px;
      }
      @media screen and (max-width: 375px) {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0.8rem;
  }
`;
export const TextArea = styled.textarea`
  border: 1px solid;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;

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
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  @media screen and (max-width: 425px) {
    margin-top: 5px;
    /* width: 30%; */
    padding: 0.3rem 0rem;
    font-size: 0.8rem;
  }
`;

export const inputStyles = {
  borderRadius: "none",
  border: "none",
  outline: "none",
  focusBorderColor: "none",
};
