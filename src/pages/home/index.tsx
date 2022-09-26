import React from "react";
import FQA from "./component/faq";
import NewsLetterPage from "./component/newsletter";
import HomeWrapper, { InnerWrapper } from "./style";

function HomePage() {
  return (
    <HomeWrapper>
      HomePag e move
      <InnerWrapper>
        <FQA />
        <NewsLetterPage />
      </InnerWrapper>
    </HomeWrapper>
  );
}

export default HomePage;
