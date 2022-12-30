import React, { useEffect, useState } from "react";
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
  const [images, setImages] = useState<File[]>([]);
  const [ImageURLs, setImageURLs] = useState<string[]>([]);

  // the watch() is used to observe value change in state select
  const formData = watch();

  useEffect(() => {
    if (images.length < 1) {
      toast.error("You need to select 1 - 3 images", toastOptions);
      return;
    }
    const newImageUrls: string[] = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: { target: { files: any } }) {
    setImages([...e.target.files]);
  }

  const uri =
    formData.foundPersonType === "Found Missing Person"
      ? ADDFOUNDPERSON_ROUTE
      : ADDDEADPERSON_ROUTE;

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
    if (images.length > 3) {
      toast.error("You selected more than three images", toastOptions);
      return;
    }
    Array.from(images).forEach(item => {
      imgData.append("products", item);
    });
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
          onImageChange={onImageChange}
          ImageURLs={ImageURLs}
        />
      </form>
    </FoundWrapper>
  );
}

export default AddFoundPage;
