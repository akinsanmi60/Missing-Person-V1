import React from "react";

type Props = {
  sliderImage: string[];
  activeIndex: number;
};

function SliderContent({ activeIndex, sliderImage }: Props) {
  return (
    <>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides-active" : "inactive"}
        >
          <img src={slide} alt="" />
        </div>
      ))}
    </>
  );
}

export default SliderContent;
