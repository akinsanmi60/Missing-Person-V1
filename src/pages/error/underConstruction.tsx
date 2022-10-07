/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Input, Spinner } from "@chakra-ui/react";
import FormField from "common/FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/construction.svg";
import toastOptions from "hooks/toast";
import { postRequest } from "utils/apiCall";
import { useMutation } from "@tanstack/react-query";
import SectionWrapper, { ButtonStyled } from "./style";
import { toast } from "react-toastify";
import { NOTIFY_ROUTE } from "utils/Api-Routes";

const styles = {
  logo: {
    width: "70%",
  },
};

interface LoginFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

function ConstructionPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { register, handleSubmit } = useForm<LoginFormInputs>({
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

  // handle login function
  const submitForm = (values: { email: string }) => {
    console.log(values);
    mutate({ data: values, url: NOTIFY_ROUTE });
  };

  return (
    <SectionWrapper>
      <div className="con-container">
        <div className="logoimg">
          <div className="imgbox">
            <img src={LogoImg} alt="chain" style={styles.logo} loading="lazy" />
          </div>
          <p className="text">
            We are currently working on this feature and will launch it soon.
            Click <span onClick={goBack}>🔙</span> to navigate back to previous
            page
          </p>
        </div>
        <div className="writecontainer">
          <div>
            <p className="text">Signup to be the first to know about us</p>
            <form onSubmit={handleSubmit(submitForm)}>
              <FormField>
                <Input {...register("email")} type="email" required />
              </FormField>
              <div className="btn">
                <div>
                  <ButtonStyled type="submit" className="green_btn">
                    Subscribe
                  </ButtonStyled>
                  <span> {isLoading ? <Spinner size="sm" /> : null}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ConstructionPage;
