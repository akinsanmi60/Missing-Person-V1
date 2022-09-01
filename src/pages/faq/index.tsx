import React from "react";
import StudentQA from "./components";
import Faq from "../../assets/FAQs-pana.png";
import { Wrapper } from "./style";

function Question() {
  return (
    <Wrapper>
      <div className="img">
        <img src={Faq} alt="" />
      </div>
      <div className="outletcontainer">
        <h1>Frequently Asked Questions</h1>
        <StudentQA />
      </div>
    </Wrapper>
  );
}

export default Question;
