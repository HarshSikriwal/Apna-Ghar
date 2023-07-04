import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Listing from "./pages/Listing";
import Offers from "./pages/Offers";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Explore />,
        },
        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "/private-route",
          element: <PrivateRoute />,
        },
        {
          path: "/account",
          element: <Account />,

          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "listing",
              element: <Listing />,
            },
          ],
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
