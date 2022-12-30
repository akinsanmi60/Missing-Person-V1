import React, { useEffect, useState } from "react";
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
  const [images, setImages] = useState<File[]>([]);
  const [ImageURLs, setImageURLs] = useState<string[]>([]);

  // the watch() is used to observe value change in state select
  const formData = watch();

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: string[] = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: { target: { files: any } }) {
    setImages([...e.target.files]);
  }

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    const imgData = new FormData();
    if (images.length > 3) return;
    Array.from(images).forEach(item => {
      imgData.append("products", item);
    });
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
          onImageChange={onImageChange}
          ImageURLs={ImageURLs}
        />
      </form>
      <PaymentModal onClose={onClose} isOpen={isOpen} />
    </MissingWrapper>
  );
}

export default AddMissingPage;
