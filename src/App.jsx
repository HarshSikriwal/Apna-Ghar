import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Listing from "./pages/Listing";

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
