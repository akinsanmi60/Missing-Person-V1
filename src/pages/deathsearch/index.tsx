import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchBar from "common/Search";
import { useState } from "react";
import OuterLayout from "styles/layout";
import DeathWrapper from "./style";
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

function DeathPage() {
  const viewPage = "Dead Body";
  const [dataDead, setData] = useState<DataProp[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const { isLoading, isError, isRefetching } = useQuery(
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
  const pageCount = Math.ceil(dataDead?.length / personPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayPeople = dataDead
    ?.slice(pagesVisited, pagesVisited + personPerPage)
    .map(person => (
      <div key={person.id}>
        <CardPerson person={person} />
      </div>
    ));

  return (
    <DeathWrapper>
      <div className="box">
        <SearchBar view={viewPage} people={dataDead} setData={setData} />
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
    </DeathWrapper>
  );
}

export default DeathPage;
