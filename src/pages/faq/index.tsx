import React from "react";
import StudentQA from "./components";
import Faq from "../../assets/FAQs-pana.png";
import { Wrapper } from "./style";

function Question() {
  return (
    <Wrapper>
      <div>
        <img src={Faq} alt="" className="img" />
      </div>
      <div className="outletcontainer">
        <h1>Frequently Asked Questions</h1>
        <StudentQA />
      </div>
    </Wrapper>
  );
}

export default Question;
