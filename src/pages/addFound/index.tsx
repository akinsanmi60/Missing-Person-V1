/* eslint-disable @typescript-eslint/no-unused-vars */
import AddFormPage from "common/AddForm";
import React, { useState } from "react";
import FoundWrapper from "./style";

function AddFoundPage() {
  const formType = "found";
  const [foundData, setData] = useState({});

  return (
    <FoundWrapper>
      <div className="head">
        <h1>Add Found Person Details</h1>
      </div>
      <AddFormPage formType={formType} setData={setData} />
    </FoundWrapper>
  );
}

export default AddFoundPage;
