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

  .card {
    margin: 0px 0px 10px 0px;
    padding: 10px 0px 20px 0px;
    border: 1px solid #eee;
    box-shadow: 0 0.05em 0.05em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1em 0 rgba(0, 0, 0, 0.15) !important;

    p {
      font-size: 15px;
      border-bottom: 1px solid blue;
    }

    .image,
    .description {
      display: flex;
      justify-content: center;
    }

    img {
      width: 50%;
      height: 150px;
      background-size: contain;
      margin-bottom: 20px;
      background-position: center;
    }
  }

  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .select-btn {
    display: flex;
    justify-content: center;
  }

  .paginationBttns a {
    padding: 6px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid var(--dark-primary);
    color: var(--dark-primary);
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: var(--dark-primary);
  }

  .paginationActive a {
    color: white;
    background-color: var(--dark-primary);
  }

  .paginationDisabled a {
    color: var(--dark-primary);
    background-color: transprent;
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
