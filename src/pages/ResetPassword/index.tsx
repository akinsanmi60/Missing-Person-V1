import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Spinner,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "utils/apiCall";
import { RESET_PASSWORD } from "utils/Api-Routes";

import ResetContainer from "./style";
import FormField from "common/FormField";

interface LoginFormInputs {
  email: string;
  code: string;
  newPassword: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    code: yup.string().required(),
    newPassword: yup.string().min(5).max(20).required(),
  })
  .required();

function ResetFormPage() {
  const navigate = useNavigate();
  const [pshow, setPshow] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);

  // handle reset function
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      navigate("/studentlogin");
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    console.log("<<<+++++>>>>", valueInput);
    mutate({ data: valueInput, url: RESET_PASSWORD });
  };

  return (
    <ResetContainer>
      <div className="formbox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="titlebox">
            <h1 className="title">
              <Link to="/">People</Link>
            </h1>
            <h2 className="hero">Reset Your Password</h2>
          </div>
          <div className="form">
            <FormField label="Email">
              <Input {...register("email")} type="email" required />
            </FormField>
          </div>
          <div className="form">
            <FormField label="Code">
              <Input {...register("code")} type="text" required />
            </FormField>
          </div>
          <div className="form">
            <FormField label="New Password">
              <InputGroup>
                <Input
                  {...register("newPassword")}
                  type={pshow ? "text" : "password"}
                />
                <InputRightElement>
                  <p className="btn-icon" onClick={handleClickP}>
                    {pshow ? (
                      <ViewIcon color=" #16194F" />
                    ) : (
                      <ViewOffIcon color=" #16194F" />
                    )}
                  </p>
                </InputRightElement>
              </InputGroup>
            </FormField>
          </div>
          <div className="btn">
            <button type="submit" className="reset_btn">
              {isLoading ? <Spinner size="sm" /> : "Send"}
            </button>
          </div>
        </form>
      </div>
    </ResetContainer>
  );
}

export default ResetFormPage;
