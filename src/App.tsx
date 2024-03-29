import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LayoutWrapper from "utils/WebpageWrap";
import ROUTESWITHLAYER, { APPROUTES } from "Routes";
import AppLayout from "pages/userAppLayout";
import LoginPage from "pages/loginPage";
import RegisterPage from "pages/registerPage";
import VerifyPage from "pages/verifyPage";
import PrivateRoute from "hooks/privateRoute";
import LoaderLayout from "common/LoaderLayout";

const Unauthorized = React.lazy(() => import("pages/error/unauthorized"));
const ErrorPage = React.lazy(() => import("pages/error/error"));
const ResetFormPage = React.lazy(() => import("pages/resetPassword"));
const AddMissingPage = React.lazy(() => import("pages/addMissing"));
const PersonPage = React.lazy(() => import("pages/personPage"));

enum Account {
  user = "user",
  Admin = "admin",
  staff = "staff",
}

function Wrapper() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  // useEffect(() => {
  //   const { port, hostname } = window.location;

  //   if (parseInt(port, 10) !== 3000 && hostname !== "localhost") {
  //     const identity = prompt("Please the passcode");
  //     if (identity !== "NigeriaData2022?") {
  //       window.location.href = "https://google.com";
  //       return;
  //     }
  //   }
  // }, []);

  return (
    <div>
      <Wrapper />
      <React.Suspense fallback={<LoaderLayout />}>
        <Routes>
          {/** Permission denied route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/reset_password" element={<ResetFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify_account" element={<VerifyPage />} />
          <Route path="users/:id" element={<PersonPage />} />

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

          <Route element={<PrivateRoute accounts={[Account.user]} />}>
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
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
