import AuthContext from "contexts/AuthProvider";
import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  return authUser?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
