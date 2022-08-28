import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SearchBar from "common/Search";
import React, { useState } from "react";
import BirthWrapper from "./style";

type DataProp = {
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
}[];

function BirthPage() {
  const viewPage = "Birth";
  const [dataSet, setData] = useState<DataProp>();

  useQuery(["user"], () => axios.get(`https://dummyjson.com/users`), {
    onSuccess(e) {
      setData(e?.data?.users);
    },
    refetchOnWindowFocus: false,
  });

  console.log("data", dataSet);

  return (
    <BirthWrapper>
      <div className="wallpaper">
        <SearchBar view={viewPage} />
      </div>
      <div className="box5">
        hello
        {dataSet?.map(n => (
          <div key={n.firstName}>
            <p>{n.lastName}</p>
            <p>{n.birthDate}</p>
            <p>{n.eyeColor}</p>
          </div>
        ))}
      </div>
    </BirthWrapper>
  );
}

export default BirthPage;
