import React from "react";
// import Imga from "../../../../assets/edmund-lou.jpg";
// import Imgb from "../../../../assets/edited.jpg";
import Imgc from "../../../../assets/margaret.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { DivWrapper } from "./style";

function HomeBackground() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 3000,
  //     autoplaySpeed: 10000,
  //     cssEase: "linear",
  //     nextArrow: false,
  //     prevArrow: false,
  //   };
  //   const boxImage = [Imga, Imgb, Imgc];

  return (
    <DivWrapper>
      <div className="box">
        <div className="sideA">
          <div>
            <img src={Imgc} alt="family" />
          </div>
          {/* <Carousel {...settings}>
            {boxImage.map(pic => (
              <div>
                <img src={pic} alt="family" />
              </div>
            ))}
          </Carousel> */}
        </div>
        <div className="sideB">
          <h1>Missing Person</h1>
          <p>
            Finding a missing person can be a difficult task, but if you know
            where to look, it is often much easier to find a missing person.
            Just follow some simple steps to find a missing person in our
            database. We regularly add data of missing children, mental person
            and unknown dead bodies received in Nigeria. You can search about
            your missing person on this website, and can get notification about
            found person through your email or mobile SMS.
          </p>
        </div>
      </div>
    </DivWrapper>
  );
}

export default HomeBackground;
