/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useQuery } from "@tanstack/react-query";
import CardPerson from "common/Card";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "utils/apiCall";
import { queryKeys } from "utils/queryKey";
import FQA from "./component/faq";
import HomeButton from "./component/homeNavigation";
import NewsLetterPage from "./component/newsletter";
import HomeWrapper, { InnerWrapper } from "./style";

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

function HomePage() {
  const navigate = useNavigate();
  const [personData, setData] = useState<DataProp[]>([]);

  useQuery(
    [queryKeys.getFoundPerson],
    () => getRequest({ url: `https://dummyjson.com/users` }),
    {
      onSuccess(e) {
        setData(e?.users);
      },
      refetchOnWindowFocus: false,
    },
  );

  const seenPerson =
    personData.length > 0
      ? personData.slice(0, 10).map(person => (
          <div
            key={person.id.toString()}
            onClick={() => navigate(`/users/${person.id}`)}
          >
            <CardPerson person={person} />
          </div>
        ))
      : null;

  return (
    <HomeWrapper>
      <InnerWrapper>
        <div className="seen">
          <h1>Have You Seen Me?</h1>
          <div className="display">{seenPerson}</div>
        </div>
        <HomeButton />
        <FQA />
        <NewsLetterPage />
      </InnerWrapper>
    </HomeWrapper>
  );
}

export default HomePage;
