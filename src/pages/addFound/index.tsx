/* eslint-disable @typescript-eslint/no-unused-vars */
import AddFormPage from "common/AddForm";
import React, { useState } from "react";
import FoundWrapper from "./style";
import { FasProp } from "./type";

function AddFoundPage() {
  const formType = "found";
  const [foundData, setData] = useState({} as FasProp);
  console.log(foundData);

  return (
    <FoundWrapper>
      <div className="head">
        <h1> Please Add Found Person Details</h1>
      </div>
      <AddFormPage formType={formType} setData={setData} />
    </FoundWrapper>
  );
}

export default AddFoundPage;
