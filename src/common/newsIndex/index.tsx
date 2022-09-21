import React from "react";
import { BreakingNews } from "./style";

type NewsProp = {
  availableNews: {
    news1: string;
    news2: string;
    new3: string;
  };
};

function NewsIndex({ availableNews }: NewsProp) {
  return (
    <div>
      <BreakingNews>
        <div className="newsbox">
          {Object.values(availableNews).map((item, i) => (
            <div className="newsitem" key={i.toString()}>
              <p>👉{item} </p>
            </div>
          ))}
        </div>
      </BreakingNews>
    </div>
  );
}

export default NewsIndex;
