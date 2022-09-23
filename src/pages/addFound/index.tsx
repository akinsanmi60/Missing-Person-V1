import React from "react";
import AddFormPage from "common/AddForm";
import { useForm, SubmitHandler } from "react-hook-form";
import FoundWrapper from "./style";
import { FasProp } from "./type";

function AddFoundPage() {
  const formType = "found";
  const { register, handleSubmit, watch, reset, setValue } = useForm<FasProp>();

  // the watch() is used to observe value change in state select
  const formData = watch();

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    reset();
  };

  return (
    <FoundWrapper>
      <div className="head">
        <h1> Please Add Found Person Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddFormPage
          formType={formType}
          formData={formData}
          register={register}
          setValue={setValue}
        />
      </form>
    </FoundWrapper>
  );
}

export default AddFoundPage;
