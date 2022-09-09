import React from "react";
import FormField from "common/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Spinner } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "utils/apiCall";
import letterImg from "../../../../assets/Mailbox-bro.svg";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import LetterWrapper from "./style";
import { NEWSLETTER } from "utils/Api-Routes";

type FasProp = {
  firstName: string;
  lastName: string;
  email: string;
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

function NewsLetterPage() {
  const { register, handleSubmit } = useForm<FasProp>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit: SubmitHandler<FasProp> = data => {
    if (!data.email.match(EMAIL_REGEX)) {
      return toast.error("Please enter a valid email format", toastOptions);
    }
    mutate({ data: data, url: NEWSLETTER });
  };

  return (
    <LetterWrapper>
      <div className="container">
        <div className="formbox">
          <h1>Sign-up for our newsletter</h1>
          <p>
            Enter your mail to receive the latest news and to learn about
            interesting events.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formfield">
              <div>
                <FormField>
                  <Input defaultValue="First Name" {...register("firstName")} />
                </FormField>
              </div>
              <div>
                <FormField>
                  <Input defaultValue="Last Name" {...register("lastName")} />
                </FormField>
              </div>
            </div>
            <div>
              <FormField>
                <Input defaultValue="test" {...register("email")} />
              </FormField>
            </div>
            <div className="btn_box">
              <button type="submit" className="btn">
                {isLoading ? "Sending..." : "Subscribe"}
              </button>
              <span>{isLoading ? <Spinner size="sm" /> : null}</span>
            </div>
          </form>
        </div>

        <div className="imagebox">
          <img src={letterImg} alt="svg" />
        </div>
      </div>
    </LetterWrapper>
  );
}

export default NewsLetterPage;
