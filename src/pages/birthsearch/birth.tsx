import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchBar from "common/Search";
import BirthWrapper from "./style";
import OuterLayout from "styles/layout";
import ListView from "common/ListView";
import CardPerson from "common/Card";

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

function BirthPage() {
  const viewPage = "Birth";
  const [dataSet, setData] = useState<DataProp[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const { isLoading, isRefetching, isError } = useQuery(
    ["user"],
    () => axios.get(`https://dummyjson.com/users`),
    {
      onSuccess(e) {
        setData(e?.data.users);
      },
      refetchOnWindowFocus: false,
    },
  );

  const personPerPage = 15;
  const pagesVisited = pageNumber * personPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(dataSet?.length / personPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayPeople = dataSet
    ?.slice(pagesVisited, pagesVisited + personPerPage)
    .map(person => (
      <div key={person.id}>
        <CardPerson person={person} />
      </div>
    ));

  return (
    <BirthWrapper>
      <div className="wallpaper">
        <SearchBar view={viewPage} people={dataSet} setData={setData} />
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
          />
        </div>
      </OuterLayout>
    </BirthWrapper>
  );
}

export default BirthPage;
