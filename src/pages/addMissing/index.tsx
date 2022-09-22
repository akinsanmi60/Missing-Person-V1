/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import AddFormPage from "common/AddForm";
import { SubmitHandler, useForm } from "react-hook-form";
import MissingWrapper from "./style";
import { FasProp } from "./type";

function AddMissingPage() {
  const formType = "missing";
  const { register, handleSubmit, watch, reset } = useForm<FasProp>();

  // the watch() is used to observe value change in state select
  const formData = watch();

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    reset();
  };

  return (
    <MissingWrapper>
      <div className="head">
        <h1>Please Add Missing Person Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddFormPage
          formType={formType}
          formData={formData}
          register={register}
        />
      </form>
    </MissingWrapper>
  );
}

export default AddMissingPage;
