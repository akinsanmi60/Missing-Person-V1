/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import questionsA from "../data";
import { QuestionStyled } from "../style";

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
    <QuestionStyled toggle={toggle}>
      <div className="q-con">
        <div className="toggle-title" onClick={btnToggler}>
          <h4>{question.title}</h4>
          <div className="click" onClick={btnToggler}>
            {toggle ? <FaMinusCircle /> : <FaPlusCircle />}
          </div>
        </div>
        {toggle && <p>{question.description}</p>}
      </div>
    </QuestionStyled>
  );
}

function StudentQA() {
  return (
    <div>
      {questionsA.map(question => (
        <div key={question.title}>
          <Questioncard question={question} />
        </div>
      ))}
    </div>
  );
}

export default StudentQA;
