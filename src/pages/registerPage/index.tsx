import React, { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormField from "common/FormField";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import RegisterWrapper, { ButtonStyled } from "./style";
import AppHeader, { AppFooter } from "common/AppWrapper";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import AuthContext from "contexts/AuthProvider";
import { postRequest } from "utils/apiCall";
import { USER_REGISTER } from "utils/Api-Routes";

interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
    accountType: yup.string().default("student"),
  })
  .required();

function RegisterPage() {
  const { setAuthUser } = useContext(AuthContext);
  const [pshow, setPshow] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  // to view password
  const handleClickP = () => setPshow(!pshow);
  const handleClick = () => setShow(!show);

  // handle register function
  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      const user = res?.user;
      setAuthUser({ user });
      navigate("/verificationpage");
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const onSubmit = (valueInput: any) => {
    if (valueInput.password !== valueInput.confirmPassword) {
      return toast.error("passwords do not match", toastOptions);
    }
    mutate({ data: valueInput, url: USER_REGISTER });
  };
  return (
    <>
      <AppHeader />
      <RegisterWrapper>
        <div className="boxform">
          <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="hero">Sign up to People</h1>
              <div className="optlogin">
                <span>
                  <FaFacebookSquare />
                </span>
                <span>
                  <FaTwitterSquare />
                </span>
                <span>
                  <FaGooglePlusSquare />
                </span>
              </div>

              <div className="textopt">
                <p>Or signup with</p>
              </div>
              <div className="form">
                <div>
                  <FormField label="First Name">
                    <Input {...register("firstName")} type="text" required />
                  </FormField>
                </div>
                <div>
                  <FormField label="Last Name">
                    <Input {...register("lastName")} type="text" required />
                  </FormField>
                </div>
              </div>
              <div className="form">
                <div>
                  <FormField label="Email">
                    <Input {...register("email")} type="email" required />
                  </FormField>
                </div>
                <div>
                  <FormField label="Phone Number">
                    <Input {...register("phoneNumber")} type="text" required />
                  </FormField>
                </div>
              </div>
              <div className="form">
                <div>
                  <FormField label="Password">
                    <InputGroup>
                      <Input
                        {...register("password")}
                        type={pshow ? "text" : "password"}
                      />
                      <InputRightElement>
                        <p className="btn-icon" onClick={handleClickP}>
                          {pshow ? (
                            <ViewIcon color="#0E2038" />
                          ) : (
                            <ViewOffIcon color="#0E2038" />
                          )}
                        </p>
                      </InputRightElement>
                    </InputGroup>
                  </FormField>
                </div>
                <div>
                  <FormField label="Confirm Password">
                    <InputGroup>
                      <Input
                        {...register("confirmPassword")}
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement>
                        <p className="btn-icon" onClick={handleClick}>
                          {show ? (
                            <ViewIcon color=" #16194F" />
                          ) : (
                            <ViewOffIcon color=" #16194F" />
                          )}
                        </p>
                      </InputRightElement>
                    </InputGroup>
                  </FormField>
                </div>
              </div>

              <div className="btn">
                <ButtonStyled>
                  {isLoading ? "Loading..." : "Sign Up"}
                </ButtonStyled>
                <span>{isLoading ? <Spinner size="sm" /> : null}</span>
              </div>
              <div className="text">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </RegisterWrapper>
      <AppFooter />
    </>
  );
}

export default RegisterPage;
