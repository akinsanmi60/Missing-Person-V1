import styled from "styled-components";

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
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
    font-size: 13px;
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
`;
export default PaginationBox;
