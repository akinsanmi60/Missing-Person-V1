import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutWrapper from "utils/WebpageWrap";
import ROUTESWITHLAYER from "Routes";

function Wrapper() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div>
      <Wrapper />
      <React.Suspense fallback="loading">
        <Routes>
          {Object.entries(ROUTESWITHLAYER).map(itemRoute => {
            const [key, value] = itemRoute;
            const RouteComponent = value.element;
            return (
              <Route
                key={key}
                path={value.path}
                element={
                  <LayoutWrapper>
                    <RouteComponent />
                  </LayoutWrapper>
                }
              />
            );
          })}
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
