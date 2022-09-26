import styled from "styled-components";

const PersonWrapper = styled.div`
  .boxperson {
    border: 1px solid var(--dark-primary);
    background-color: var(--neutral-light);
    padding: 10px;
  }

  .btn_back {
    cursor: pointer;
  }
  .titleName h1 {
    font-size: 30px;
    font-weight: 900;
  }

  .incidentdetail {
    margin-bottom: 25px;
    .data {
      font-size: 12px;
    }
  }

  .statehandle {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 90px;
    .err_img {
      position: center;
      width: 100%;
      height: 250px;
    }
    p {
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
    }
  }

  .imagepreview {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .imgbox img {
      border: 1px solid var(--dark-primary);
      padding: 5px;
      width: 80%;
    }
    .pdfimg,
    .imgbox {
      display: flex;
      justify-content: center;
    }
    .pdf img {
      width: 40%;
    }
    .imgtext {
      h2 {
        text-align: center;
        font-size: 22px;
        font-weight: 900;
      }

      p {
        margin-top: 20px;
        text-align: center;
        font-size: 12px;
        color: blue;
        font-style: italic;
        text-decoration: underline;
      }
    }
  }

  .tabledetail {
    margin-top: 50px;
    Td {
      font-size: 14px;
    }
  }
  .description {
    margin: 38px 0px 30px 0px;
    h3 {
      font-weight: 600;
      margin-top: 20px;
    }
    p {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
  .tipsubmission {
    h3 {
      font-weight: 600;
    }

    p {
      font-size: 15px;
      margin-bottom: 10px;
    }

    span {
      font-weight: 600;
    }

    .Link {
      text-decoration: underline;
    }
  }
`;
export default PersonWrapper;
