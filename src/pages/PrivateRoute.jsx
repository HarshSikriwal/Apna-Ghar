import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <Navigate replace={true} to="/account/profile" />
  ) : (
    <Navigate replace={true} to="/sign-in" />
  );
};

export default PrivateRoute;
