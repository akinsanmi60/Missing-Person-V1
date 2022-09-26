/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import questionsA from "./data";
import { HomeFqaStyled, Wrapper } from "./style";

type QProp = {
  question: {
    id: number;
    title: string;
    description: string;
  };
};

function Questioncard({ question }: QProp) {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };
  return (
    <HomeFqaStyled toggle={toggle}>
      <div className="q-con">
        <div className="toggle-title" onClick={btnToggler}>
          <h4>{question.title}</h4>
          <div className="click" onClick={btnToggler}>
            {toggle ? <FaMinusCircle /> : <FaPlusCircle />}
          </div>
        </div>
        {toggle && <p>{question.description}</p>}
      </div>
    </HomeFqaStyled>
  );
}

function FQA() {
  return (
    <Wrapper>
      <div className="box">
        <div className="text">
          <h2>
            <span>First Steps</span>
          </h2>
          <h3>
            <span>What are the actions i should take?</span>
          </h3>
        </div>
        <div className="que">
          {questionsA.map(question => (
            <div key={question.title}>
              <Questioncard question={question} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default FQA;
