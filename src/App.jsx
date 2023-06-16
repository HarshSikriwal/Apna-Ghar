import {
    createBrowserRouter,RouterProvider
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App(){
const router = createBrowserRouter([
    {
      path: "/",
      element: <Explore />,
      errorElement: <ErrorPage />
    },
    {
      path: "/offers",
      element: <Offers />
    },
    {
      path: "/profile",
      element: <SignIn />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    // {
    //   path: "/*",
    //   errorElement: <ErrorPage />
    // },
  ]);
    return (<RouterProvider router={router} />)
  }

 export default App