import SearchBar from "common/Search";
import { FormDataProp } from "common/Search/type";
import React, { useState } from "react";

function DeathPage() {
  const [st, setSt] = useState("");
  const submit = async (data: FormDataProp) => {
    console.log(data);
    setSt(data.firstName);
  };
  return (
    <>
      Death
      <SearchBar submit={submit} />
      {st}
    </>
  );
}

export default DeathPage;
