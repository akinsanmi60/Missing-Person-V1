/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

type PropsDot = {
  onclick: () => void;
  sliderImage: string[];
  activeIndex: number;
};

function DotsPage({ activeIndex, onclick, sliderImage }: PropsDot) {
  return (
    <div className="all-dots">
      {sliderImage.map((_slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={onclick}
        ></span>
      ))}
    </div>
  );
}

export default DotsPage;
