import SearchBar from "common/Search";
import React from "react";
import BirthWrapper from "./style";

function MissingPage() {
  const viewPage = "Missing Person";

  return (
    <BirthWrapper>
      <div className="wallpaper">
        <SearchBar view={viewPage} />
      </div>
    </BirthWrapper>
  );
}

export default MissingPage;
