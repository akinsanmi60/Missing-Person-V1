import React from "react";
import ReactPaginate from "react-paginate";
import PaginationBox from "./style";

type Props = {
  pageCount: number;
  changePage: ({ selected }: { selected: number }) => void;
};

function Pagination({ pageCount, changePage }: Props) {
  return (
    <PaginationBox>
      <ReactPaginate
        previousLabel="<<<"
        nextLabel=">>>"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </PaginationBox>
  );
}

export default Pagination;
