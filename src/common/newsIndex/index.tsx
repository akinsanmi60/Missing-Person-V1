import React from "react";
import { BreakingNews } from "./style";

function NewsIndex() {
  return (
    <div>
      <BreakingNews>
        <div className="newsbox">
          <div className="newsitem">
            <p>👉Get updated </p>
          </div>
          <div className="newsitem">
            <p>
              👉 We make no warranties of any kind in relation to our content,
              including but not limited to accuracy and updatedness. No part of
              the content that we provide constitutes financial advice, legal
              advice or any other form of advice meant for your specific
              reliance for any purpose.
            </p>
          </div>
          <div className="newsitem">
            <p>👉Only pay when you're satisfied</p>
          </div>
        </div>
      </BreakingNews>
    </div>
  );
}

export default NewsIndex;
