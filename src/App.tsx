import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutWrapper from "utils/WebpageWrap";
import ROUTESWITHLAYER, { APPROUTES } from "Routes";
import AppLayout from "pages/appLayout";

const AddMissingPage = React.lazy(() => import("pages/addMissing"));

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
          <Route path="/auth_profile" element={<AppLayout />}>
            <Route index element={<AddMissingPage />} />
            {Object.entries(APPROUTES).map(appRoute => {
              const [key, value] = appRoute;
              const AppRouteComponent = value.element;
              return (
                <Route
                  key={key}
                  path={value.path}
                  element={<AppRouteComponent />}
                />
              );
            })}
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
