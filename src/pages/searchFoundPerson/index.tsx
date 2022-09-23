import React, { useState } from "react";
import IdentifiedWrapper from "./style";
import { getRequest } from "utils/apiCall";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "utils/queryKey";
import CardPersonFound from "common/CardFound";
import Pagination from "common/Pagination";

type DataProp = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  bloodGroup: string;
  age: string;
  gender: string;
  email: string;
  image: string;
  address: {
    address: string;
    city: string;
    postalcode: string;
  };
  birthDate: string;
  height: number;
  weight: number;
  hair: {
    color: string;
    type: string;
  };
  eyeColor: string;
};
function IdentifiedPage() {
  const [pageNumber, setPageNumber] = useState(0);
  const [personData, setData] = useState<DataProp[]>([]);

  const { isLoading, isError, isRefetching } = useQuery(
    [queryKeys.getFoundPerson],
    () => getRequest({ url: `https://dummyjson.com/users` }),
    {
      onSuccess(e) {
        setData(e?.users);
      },
      refetchOnWindowFocus: false,
    },
  );

  const personPerPage = 15;
  const pagesVisited = pageNumber * personPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(personData?.length / personPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayPeople = personData
    ?.slice(pagesVisited, pagesVisited + personPerPage)
    .map(person => (
      <div key={person.id}>
        <CardPersonFound person={person} />
      </div>
    ));

  const totalNumber = personData?.length;

  return (
    <IdentifiedWrapper>
      <div className="container">
        <h1>{totalNumber} Identified Persons</h1>
        <div className="head">
          {isLoading ? (
            <div className="statehandle">
              <div className="handlepage">
                {/* <img src={loadingPng} alt="loading" className="err_img" /> */}
                <p>Loading...</p>
                <p>Please wait</p>
              </div>
            </div>
          ) : isRefetching ? (
            <div className="statehandle">
              <div className="handlepage">
                {/* <img src={refecthPng} alt="Error" className="err_img" /> */}
                <p>Please wait while it refetch...</p>
              </div>
            </div>
          ) : isError ? (
            <div className="statehandle">
              <div className="handlepage">
                {/* <img src={ErrorPng} alt="Error" className="err_img" /> */}
                <p>Error while loading...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="box_people">{displayPeople}</div>
              <div className="select-btn">
                <Pagination pageCount={pageCount} changePage={changePage} />
              </div>
            </>
          )}
        </div>
      </div>
    </IdentifiedWrapper>
  );
}

export default IdentifiedPage;
