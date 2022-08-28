import SearchBar from "common/Search";

import DeathWrapper from "./style";

function DeathPage() {
  const viewPage = "Dead Body";

  return (
    <DeathWrapper>
      <div className="box">
        <SearchBar view={viewPage} />
      </div>
    </DeathWrapper>
  );
}

export default DeathPage;
