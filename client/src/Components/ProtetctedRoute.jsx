/* import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/Userauth";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
 */
import React from "react";

const ProtetctedRoute = () => {
  return <div></div>;
};

export default ProtetctedRoute;
