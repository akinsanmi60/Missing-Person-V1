/* eslint-disable @typescript-eslint/no-unused-vars */
import AddFormPage from "common/AddForm";
import React, { useState } from "react";
import MissingWrapper from "./style";
import { FasProp } from "./type";

function AddMissingPage() {
  const formType = "missing";
  const [missingData, setData] = useState({} as FasProp);
  return (
    <MissingWrapper>
      <div className="head">
        <h1>Please Add Missing Person Details</h1>
      </div>
      <AddFormPage formType={formType} setData={setData} />
    </MissingWrapper>
  );
}

export default AddMissingPage;
