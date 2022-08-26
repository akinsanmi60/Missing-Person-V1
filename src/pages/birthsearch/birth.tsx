import SearchBar from "common/Search";
import { FormDataProp } from "common/Search/type";
import React, { useState } from "react";

function BirthPage() {
  const [st, setSt] = useState("");
  const submit = async (data: FormDataProp) => {
    console.log(data);
    setSt(data.firstName);
  };
  return (
    <>
      birth
      <SearchBar submit={submit} />
      {st}
    </>
  );
}

export default BirthPage;
