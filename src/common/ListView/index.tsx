/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import refecthPng from "../../assets/Spinner.svg";
import loadPng from "../../assets/Disk.svg";
import ErrorPng from "../../assets/Ball.svg";
import SearchPng from "../../assets/Magnify-2.1s-200px.svg";
import ListWrapper from "./styled";
import Pagination from "common/Pagination";
import { ListProp } from "./type";

function ListView({
  isLoading,
  isError,
  isRefetching,
  displayPeople,
  changePage,
  pageCount,
  refetch,
}: ListProp) {
  const refetchBtn = () => {
    refetch();
  };
  return (
    <ListWrapper>
      {isLoading ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={loadPng} alt="loading" className="err_img" />
            <p>Loading... Please wait</p>
          </div>
        </div>
      ) : isRefetching ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={refecthPng} alt="Error" className="err_img" />
            <p>Please wait while it refetch...</p>
          </div>
        </div>
      ) : isError ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={ErrorPng} alt="Error" className="err_img" />
            <p>Error occured while communicating with the server...</p>
          </div>
        </div>
      ) : displayPeople?.length > 0 ? (
        <>
          <div className="box_people">{displayPeople}</div>
          <div className="select-btn">
            <Pagination pageCount={pageCount} changePage={changePage} />
          </div>
        </>
      ) : displayPeople?.length === 0 ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={SearchPng} alt="Error" className="err_img" />
            <p>Your search parameter is not available in the database...</p>
            <p onClick={refetchBtn} className="span">
              Refresh Page
            </p>
          </div>
        </div>
      ) : null}
    </ListWrapper>
  );
}

export default ListView;
