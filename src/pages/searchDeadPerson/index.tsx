/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "common/Search";
import { useState } from "react";
import OuterLayout from "styles/layout";
import DeathWrapper from "./style";
import CardPerson from "common/Card";
import { getRequest } from "utils/apiCall";
import vid from "../../assets/deadbody.mp4";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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

function DeathPage() {
  const viewPage = "Dead Body";
  const [dataDead, setData] = useState<DataProp[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  const { isLoading, isError, isRefetching, refetch } = useQuery(
    ["user"],
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
  const pageCount = Math.ceil(dataDead?.length / personPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayPeople = dataDead
    ?.slice(pagesVisited, pagesVisited + personPerPage)
    .map(person => (
      <div key={person.id}>
        <div>
          <CardPerson person={person} view={viewPage} />
        </div>
      </div>
    ));

  return (
    <DeathWrapper>
      <div className="wallpaper">
        <div className="sliderwrapper">
          <div className="outline">
            <div className="welcimage">
              <video autoPlay muted loop src={vid} />
            </div>
            <div className="welcometext">
              <h1>Dead Person?</h1>
              <button className="btn">
                <Link to="/signup">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <OuterLayout>
        <div className="box">
          <div className="click" onClick={btnToggler}>
            <h4>Click to search</h4>
            {toggle ? (
              <FaMinusCircle className="icon" />
            ) : (
              <FaPlusCircle className="icon" />
            )}
          </div>
          {toggle && (
            <SearchBar view={viewPage} people={dataDead} setData={setData} />
          )}
        </div>

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
    </DeathWrapper>
  );
}

export default DeathPage;
