import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/401.svg";
import SectionWrapper, { ButtonStyled } from "./style";

const styles = {
  logo: {
    width: "100%",
  },
};

function ErrorPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <SectionWrapper>
      <div className="errorcontainer">
        <div className="logoimg">
          <div className="imgbox">
            <img src={LogoImg} alt="chain" style={styles.logo} />
          </div>
        </div>
        <div className="textcontainer">
          <div>
            <p className="text">
              We couldn't find the page you were looking for. Maybe visiting the{" "}
              <Link className="link" to="/">
                Home
              </Link>{" "}
              or our{" "}
              <Link className=" link" to="/question">
                FAQ
              </Link>{" "}
              can help?
            </p>
            <div className="btn">
              <ButtonStyled onClick={goBack} type="submit">
                Go Back
              </ButtonStyled>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ErrorPage;
