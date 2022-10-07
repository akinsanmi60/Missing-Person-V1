import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import LoaderWrapper from "./style";

function LoaderLayout() {
  return (
    <LoaderWrapper>
      <div>
        <CircleLoader color="#0E2038" size={80} speedMultiplier={2} />
        <h1>People</h1>
      </div>
    </LoaderWrapper>
  );
}

export default LoaderLayout;
