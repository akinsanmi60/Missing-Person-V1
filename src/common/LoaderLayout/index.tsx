import React from "react";
import HashLoader from "react-spinners/HashLoader";
import LoaderWrapper from "./style";

function LoaderLayout({ loading }: { loading: true }) {
  return (
    <LoaderWrapper>
      <div>
        <HashLoader
          color="#0E2038"
          size={70}
          loading={loading}
          speedMultiplier={2}
        />
        <h1>People</h1>
      </div>
    </LoaderWrapper>
  );
}

export default LoaderLayout;
