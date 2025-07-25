import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("arce_user"));

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
