import { useContext } from "react";
import { AuthContext } from "../context/Firebase/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();


  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
  return children;
};

export default PrivateRoute;
