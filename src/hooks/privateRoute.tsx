import React, { useContext } from "react";
import AuthContext from "contexts/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

enum Account {
  user = "user",
  Admin = "admin",
  staff = "staff",
}

function PrivateRoute({ accounts }: { accounts: Array<Account | string> }) {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  const accountType = authUser?.user?.accountType;

  const userHasRequiredAccount =
    authUser?.user && accounts.includes(accountType!);

  // checks on authUser
  if (!authUser?.user) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return authUser?.user && userHasRequiredAccount ? (
    <Outlet />
  ) : authUser?.user && !userHasRequiredAccount ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
