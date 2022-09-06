import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/401.svg";
import SectionWrapper, { ButtonStyled } from "./style";

const styles = {
  logo: {
    width: "100%",
    marginBottom: "10px",
  },
};

function Unauthorized() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <SectionWrapper>
      <div className="container">
        <div className="logoimg">
          <img src={LogoImg} alt="chain" style={styles.logo} />
        </div>
        <p className="text">You do not have access to the requested page.</p>
        <div className="flexgrow">
          <ButtonStyled onClick={goBack} type="submit">
            Go Back
          </ButtonStyled>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Unauthorized;
