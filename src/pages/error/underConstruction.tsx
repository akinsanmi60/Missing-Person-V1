/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Input, Spinner } from "@chakra-ui/react";
import FormField from "common/FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/construction.svg";
import SectionWrapper, { ButtonStyled } from "./style";

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
    password: yup.string().min(5).max(20).required(),
  })
  .required();

function ConstructionPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // handle login function
  const submitForm = (values: { email: string }) => {
    console.log(values);
    setLoading(true);
    setLoading(false);
  };

  return (
    <SectionWrapper>
      <div className="con-container">
        <div className="logoimg">
          <div className="imgbox">
            <img src={LogoImg} alt="chain" style={styles.logo} />
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
                <ButtonStyled type="submit" className="green_btn">
                  {loading ? <Spinner size="sm" /> : "Subscribe"}
                </ButtonStyled>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ConstructionPage;
