/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from "react";
import { Input, Spinner } from "@chakra-ui/react";
import VerifyWrapper, { ButtonStyled } from "./style";
import { toast } from "react-toastify";
import axios from "axios";
import AuthContext from "contexts/AuthProvider";
import toastOptions from "hooks/toast";
import { useNavigate } from "react-router-dom";
import { RESEND_OTP_ROUTE, VERIFY_EMAIL } from "utils/Api-Routes";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "utils/apiCall";

function VerifyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({ code: "" });
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const checkLength = () => {
    if (value?.code.length === 0) {
      return toast.error("Enter the six digits code", toastOptions);
    }
    if (value?.code.length < 6) {
      return toast.error("You entered less than six digits code", toastOptions);
    }
    if (value?.code.length > 6) {
      return toast.error("You entered more than six digits code", toastOptions);
    }
    return null;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      checkLength();
      const res = await axios.post(VERIFY_EMAIL, value, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success(`${res?.data.message}`, toastOptions);
      navigate("/login");

      window.location.reload();
    } catch (err: any) {
      toast.error(`${err.message}`, toastOptions);
    }
    setIsLoading(false);
  };

  const { mutate } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      console.log(res);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const handleOTP = () => {
    const email = authUser?.user.email;
    mutate({ data: { phoneEmail: email }, url: RESEND_OTP_ROUTE });
  };

  return (
    <VerifyWrapper>
      <div className="box">
        <div className="formcontain">
          <div className="form">
            {/* <img src={VerifyImg} alt="" style={styles.logo} /> */}
            <h2>Please verify your account</h2>
            <p className="comp-text">
              Your account has been created successfully. To complete your
              process, we have sent code to your email:{" "}
              <span>
                <b>{authUser?.user.email || "akintunde60@gmail.com"}</b>
              </span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-con">
                <Input
                  type="number"
                  name="code"
                  className="ver-input"
                  onChange={handleInputChange}
                />
              </div>

              <div className="btn">
                <ButtonStyled type="submit" className="green_btn">
                  {isLoading ? "Verifying..." : "Verify"}
                </ButtonStyled>
                <span>{isLoading ? <Spinner size="sm" /> : null}</span>
              </div>

              <div className="action-text">
                <p>
                  It may take a minute to receive your code. Haven't received
                  it? Resend a new<span onClick={handleOTP}> code.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </VerifyWrapper>
  );
}

export default VerifyPage;
