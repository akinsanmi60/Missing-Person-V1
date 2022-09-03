/* eslint-disable @typescript-eslint/no-unused-vars */
import AddFormPage from "common/AddForm";
import React, { useState } from "react";
import FoundWrapper from "./style";

function AddMissingPage() {
  const formType = "missing";
  const [missingData, setData] = useState({});
  return (
    <FoundWrapper>
      <div className="head">
        <h1>Add Missing Person Details</h1>
      </div>
      <AddFormPage formType={formType} setData={setData} />
    </FoundWrapper>
  );
}

export default AddMissingPage;
