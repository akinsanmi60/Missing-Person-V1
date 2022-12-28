import styled from "styled-components";

const DeathWrapper = styled.div`
  .box {
    background: #3a6186;
    background: -webkit-linear-gradient(to right, #89253e, #3a6186);
    background: linear-gradient(to right, #89253e, #3a6186);
    color: var(--neutral-light);
    margin-bottom: 30px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .wallpaper {
    width: 100%;
  }
  .sliderwrapper {
    margin: auto;
    overflow: hidden;
  }

  .outline {
    position: relative;
  }

  .welcimage video {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  .welcometext {
    position: absolute;
    top: 0;
    margin-top: 120px;
    margin-left: 50px;
    padding: 60px;
  }

  .welcometext h1 {
    line-height: 1.4;
    font-size: 40px;
    font-weight: 600;
    color: white;
  }

  .click {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    outline: none;
    cursor: pointer;
    border: none;
    h4 {
      font-size: 22px;
    }
    .icon {
      margin-top: 6px;
      font-size: 22px;
    }
  }

  .btn {
    background-color: white;
    padding: 0.7rem 2rem;
    color: purple;
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
  }

  @media screen and (max-width: 768px) {
    .welcimage video {
      max-height: 300px;
    }
    .welcometext {
      margin-top: 100px;
      padding: 10px;
    }
  }

  @media screen and (max-width: 425px) {
    .welcimage video {
      max-height: 200px;
    }
    .welcometext {
      position: absolute;
      top: 0;
      margin-top: 70px;
      margin-left: 10px;
      padding: 10px;
    }
    .welcometext h1 {
      line-height: 1.4;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
    .btn {
      width: 60%;
      padding: 8px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 375px) {
    .welcometext {
      margin-top: 57px;
    }
    .welcimage video {
      max-height: 180px;
    }
  }
`;
export default DeathWrapper;
