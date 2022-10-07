import React from "react";
import AddFormPage from "common/AddForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";
import toastOptions from "hooks/toast";
import { postRequest } from "utils/apiCall";
import { useMutation } from "@tanstack/react-query";
import MissingWrapper from "./style";
import { FasProp } from "./type";
import { ADDMISSINGPERSON_ROUTE } from "utils/Api-Routes";
import PaymentModal from "common/AddForm/component";

function AddMissingPage() {
  const formType = "missing";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, reset, setValue } = useForm<FasProp>();

  // the watch() is used to observe value change in state select
  const formData = watch();

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit: SubmitHandler<FasProp> = data => {
    mutate({ data: data, url: ADDMISSINGPERSON_ROUTE });
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
          setValue={setValue}
          isLoading={isLoading}
          onOpen={onOpen}
        />
      </form>
      <PaymentModal onClose={onClose} isOpen={isOpen} />
    </MissingWrapper>
  );
}

export default AddMissingPage;
