import React, { useEffect, useState } from "react";
import { SliderContainer } from "./styles";
import SliderContent from "./SliderContent";
import First from "../../../../assets/First.jpg";
import Second from "../../../../assets/Second.jpg";
import Third from "../../../../assets/Third.jpg";
import DotsPage from "./DotsContent";

function HomeImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImage = [First, Second, Third];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === sliderImage.length - 1 ? 0 : activeIndex + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderImage.length]);

  const nextSlide = () => {
    setActiveIndex(
      activeIndex === sliderImage.length - 1 ? 0 : activeIndex + 1,
    );
  };
  return (
    <SliderContainer>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <DotsPage
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={nextSlide}
      />
    </SliderContainer>
  );
}

export default HomeImageSlider;
