import React from "react";
import AddFormPage from "common/AddForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDisclosure } from "@chakra-ui/react";
import { postRequest } from "utils/apiCall";
import { ADDDEADPERSON_ROUTE, ADDFOUNDPERSON_ROUTE } from "utils/Api-Routes";
import { useMutation } from "@tanstack/react-query";
import toastOptions from "hooks/toast";
import { toast } from "react-toastify";
import FoundWrapper from "./style";
import { FasProp } from "./type";

function AddFoundPage() {
  const formType = "found";
  const { onOpen } = useDisclosure();
  const { register, handleSubmit, watch, reset, setValue } = useForm<FasProp>();

  // the watch() is used to observe value change in state select
  const formData = watch();

  const uri =
    formData.foundPersonType === "Found Missing Person"
      ? ADDFOUNDPERSON_ROUTE
      : ADDDEADPERSON_ROUTE;

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      console.log(res);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    mutate({ data: data, url: uri });
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
          isLoading={isLoading}
          onOpen={onOpen}
        />
      </form>
    </FoundWrapper>
  );
}

export default AddFoundPage;
