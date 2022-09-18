import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutWrapper from "utils/WebpageWrap";
import ROUTESWITHLAYER, { APPROUTES } from "Routes";
import AppLayout from "pages/userAppLayout";
import LoginPage from "pages/loginPage";
import RegisterPage from "pages/registerPage";
import VerifyPage from "pages/verifyPage";

// import PrivateRoute from "hooks/privateRoute";
const Unauthorized = React.lazy(() => import("pages/error/unauthorized"));
const ErrorPage = React.lazy(() => import("pages/error/error"));
const ResetFormPage = React.lazy(() => import("pages/resetPassword"));
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
          {/** Permission denied route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/reset_password" element={<ResetFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify_account" element={<VerifyPage />} />

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

          {/* <Route element={<PrivateRoute />}> */}
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
          {/* </Route> */}
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
