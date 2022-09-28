import styled from "styled-components";

const ListWrapper = styled.div`
  .box_people {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 8px;
  }

  .statehandle {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 80px;

    .err_img {
      width: 100%;
      height: 250px;
    }

    p {
      margin-top: 15px;
      text-align: center;
      font-size: 20px;
      font-weight: bolder;
    }

    .span {
      text-align: center;
      margin-top: 15px;
      font-style: italic;
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1025px) {
    .box_people {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .box_people {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 425px) {
    .box_people {
      grid-template-columns: 1fr 1fr;
    }

    .card {
      padding: 10px;
    }

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 375px) {
    .box_people {
      grid-template-columns: 1fr;
    }
  }
`;
export default ListWrapper;
