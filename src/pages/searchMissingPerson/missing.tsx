/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchBar from "common/Search";
import OuterLayout from "styles/layout";
import CardPerson from "common/Card";
import MissingWrapper from "./style";
import { useNavigate } from "react-router-dom";
const ListView = React.lazy(() => import("common/ListView"));

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

function MissingPage() {
  const viewPage = "Missing Person";
  const [dataMissing, setData] = useState<DataProp[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  const { isLoading, isError, isRefetching, refetch } = useQuery(
    ["user"],
    () => axios.get(`https://dummyjson.com/users`),
    {
      onSuccess(e) {
        setData(e?.data?.users);
      },
      refetchOnWindowFocus: false,
    },
  );

  const personPerPage = 15;
  const pagesVisited = pageNumber * personPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(dataMissing?.length / personPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayPeople = dataMissing
    ?.slice(pagesVisited, pagesVisited + personPerPage)
    .map(person => (
      <div key={person.id}>
        <div onClick={() => navigate(`/users/${person.id}`)}>
          <CardPerson person={person} />
        </div>
      </div>
    ));

  return (
    <MissingWrapper>
      <div className="wallpaper">
        <SearchBar view={viewPage} people={dataMissing} setData={setData} />
      </div>
      <OuterLayout>
        <div>
          <ListView
            isLoading={isLoading}
            isError={isError}
            isRefetching={isRefetching}
            displayPeople={displayPeople}
            changePage={changePage}
            pageCount={pageCount}
            refetch={refetch}
          />
        </div>
      </OuterLayout>
    </MissingWrapper>
  );
}

export default MissingPage;
