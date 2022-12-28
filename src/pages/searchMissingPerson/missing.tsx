/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchBar from "common/Search";
import OuterLayout from "styles/layout";
import CardPerson from "common/Card";
import MissingWrapper from "./style";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import vid from "../../assets/policeman.mp4";

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
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

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
        <div>
          <CardPerson person={person} view={viewPage} />
        </div>
      </div>
    ));

  return (
    <MissingWrapper>
      <div className="wallpaper">
        <div className="sliderwrapper">
          <div className="outline">
            <div className="welcimage">
              <video autoPlay muted loop src={vid} />
            </div>
            <div className="welcometext">
              <h1>Missing Person?</h1>
              <button className="btn">
                <Link to="/signup">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <OuterLayout>
        <div className="formboxWrap">
          <div className="click" onClick={btnToggler}>
            <h4>Click to search</h4>
            {toggle ? (
              <FaMinusCircle className="icon" />
            ) : (
              <FaPlusCircle className="icon" />
            )}
          </div>
          {toggle && (
            <SearchBar view={viewPage} people={dataMissing} setData={setData} />
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
    </MissingWrapper>
  );
}

export default MissingPage;
